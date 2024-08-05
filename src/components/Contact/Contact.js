import React, { useEffect, useRef, useState } from "react";
//import axios from "axios";

import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

/* eslint-disable import/first */
import { sendForm } from "emailjs-com";

import { TweenMax, Power3 } from "gsap";

import ContactCSS from "../Contact/Contact.module.css";

const Contact = () => {
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [contactNumber, setContactNumber] = useState("000000");

  //define form so we can use form.current to pass data to sendForm function for emailJS
  let form = useRef();

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  // react hook forms variables
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  // Captcha Implementation -----------
  let captcha;
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const setCaptchaRef = (ref) => {
    if (ref) {
      return (captcha = ref);
    }
  };
  const resetCaptcha = () => {
    captcha.reset();
  };

  // on submit handler for form
  const onSubmit = async (data, e) => {
    console.log("submission starting: This is our console log", data);

    generateContactNumber();
    sendForm(
      process.env.production.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.production.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      form.current,
      process.env.production.REACT_APP_EMAIL_JS_PUBLIC_KEY
    )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
    setIsSuccessfullySubmitted(true);
    resetCaptcha();
    reset();
  };

  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;

  //   gsap variables
  let headerScroll = useRef(null);
  let formScroll = useRef(null);
  let informationScroll = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [headerScroll, formScroll, informationScroll],
      4,
      {
        opacity: 0,
        x: 60,
        ease: Power3.easeOut,
      },
      0.25
    );
  }, []);

  return (
    <div className={ContactCSS.container}>
      <div ref={(e) => (formScroll = e)} className={ContactCSS.formContainer}>
        <div className={ContactCSS.headerWrap}>
          <h1 ref={(e) => (headerScroll = e)}>Contact</h1>
        </div>
        <form ref={form} id="contact-form" onSubmit={onSubmit}>
          <input type="hidden" name="contact_number" value={contactNumber} />
          {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">
              **Name is required
              <br />
            </div>
          )}
          <input
            {...register("user_name", { required: true, maxLength: 30 })}
            type="text"
            name="user_name"
            placeholder="Name Required"
            disabled={isSubmitting}
          />
          <br />
          {errors.user_email && errors.user_email.type === "required" && (
            <div role="alert">
              **Email is required
              <br />
            </div>
          )}
          <input
            {...register("user_email", { required: true, maxLength: 30 })}
            type="email"
            name="user_email"
            placeholder="Email Required"
            disabled={isSubmitting}
          />
          <br />
          <textarea
            {...register("message", { required: true, maxLength: 1500 })}
            name="message"
            placeholder="Message Required"
            disabled={isSubmitting}
          />
          <p className={ContactCSS.messageChars}>
            {messageCharsLeft} characters left
          </p>
          <br />
          <ReCAPTCHA
            className="g-recaptcha"
            sitekey={process.env.production.REACT_APP_RECAPTCHA_KEY}
            size="compact"
            onChange={onChange}
            ref={(r) => setCaptchaRef(r)}
          />
          <br />

          {isSuccessfullySubmitted && <div role="alert">Success!</div>}

          <button data-action="submit" type="submit" className={ContactCSS.btn}>
            Send
          </button>
        </form>
      </div>
      <div
        ref={(e) => (informationScroll = e)}
        className={ContactCSS.information}
      >
        <h3> My Information</h3>
        <p>Robert Houck</p>
        <a style={{ textDecoration: "none" }} href="mailto:rbhouck32@gmail.com">
          <p className={ContactCSS.email}>Email: rbhouck32@gmail.com</p>
        </a>
        <a style={{ textDecoration: "none" }} href="tel:440-829-3737">
          <p className={ContactCSS.phone}>Phone: 440-829-3737</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
