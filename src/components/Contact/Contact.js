import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

/* eslint-disable import/first */
import { init, sendForm } from "emailjs-com";
init("user_IDm9aKjhTDchdKwj6UBRA");

import { TweenMax, Power3 } from "gsap";

import "../Contact/Contact.css";

const Contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  // react hook forms variables

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const formRef = useRef();

  const onSubmit = (data) => {
    console.log("data submit", data);
    generateContactNumber();
    sendForm("default_service", "template_86v5uzu", "#contact-form")
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
  console.log("formRef contact.js", formRef);
  return (
    <div className="container contact">
      <div ref={(e) => (formScroll = e)} className="form-container">
        <div className="header-wrap">
          <h1 ref={(e) => (headerScroll = e)}>Contact</h1>
        </div>
        <form id="contact-form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Name"
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
            placeholder="Email"
          />
          <br />
          <textarea
            {...register("message", { required: true, maxLength: 1500 })}
            name="message"
            placeholder="Message"
          />
          <p className="message-chars-left">
            {messageCharsLeft} characters left
          </p>
          <br />
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
      <div ref={(e) => (informationScroll = e)} className="information">
        <h3> My Information</h3>
        <p>Robert Houck</p>
        <a style={{ textDecoration: "none" }} href="mailto:rbhouck32@gmail.com">
          <p className="email">Email: rbhouck32@gmail.com</p>
        </a>
        <a style={{ textDecoration: "none" }} href="tel:440-829-3737">
          <p className="phone">Phone: 440-829-3737</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
