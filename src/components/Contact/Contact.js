import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import "../Contact/Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container contact">
      <h1>Contact</h1>
      <div className="form-container">
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">
              Name is required
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
              email is required
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
            {...register("message", { required: true, maxLength: 500 })}
            name="message"
            placeholder="Message"
          />
          <br />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
