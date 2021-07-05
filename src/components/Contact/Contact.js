import React, { useState, useEffect } from "react";
import useValidation from "./Hooks/use-validation";
import emailjs from "emailjs-com";
import "./contact.css";

const emailRegx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegx = /^[7-9][0-9]{9}$/;

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState();

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }, [successMessage]);
  const {
    value: entredName,
    isValid: entredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: entredPhone,
    isValid: entredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useValidation((value) => value.match(phoneRegx));

  const {
    value: entredEmail,
    isValid: entredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useValidation((value) => value.match(emailRegx));

  const {
    value: entredSubject,
    isValid: entredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: entredDescription,
    isValid: entredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useValidation((value) => value.trim() !== "");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1i9lk0t",
        "template_1dma6pq",
        e.target,
        "user_xSN0wQvibJpJqutQRBaDd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    resetNameInput("");
    resetPhoneInput("");
    resetEmailInput("");
    resetSubjectInput("");
    resetDescriptionInput("");
    setSuccessMessage(
      `Form sent successfully!I'll contact you as soon as possible.`
    );
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const phoneInputClass = phoneInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const subjectInputClass = subjectInputHasError
    ? "form-control invalid"
    : "form-control";

  const descriptionInputClass = descriptionInputHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;

  if (
    entredNameIsValid &&
    entredPhoneIsValid &&
    entredEmailIsValid &&
    entredSubjectIsValid &&
    entredDescriptionIsValid
  ) {
    formIsValid = true;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="container text-center">
            <h2 className="mt-5 text-uppercase title">Contact Me</h2>
            <p className="text-justify">
              Please fill out the form and describe your project needs I'll
              contact you as soon as possible.
            </p>
            {successMessage && (
              <small className="text-success font-weight-bold mb-3 mt-5">
                {successMessage}
              </small>
            )}
          </div>
          <form className="contact-form mt-5" onSubmit={sendEmail}>
            <div className="form-group mb-3">
              <input
                type="text"
                className={nameInputClass}
                id="exampleFormControlInput1"
                placeholder="Name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={entredName}
                name="fname"
              />
              {nameInputHasError && (
                <p className="text-error">Name must not be empty!</p>
              )}
            </div>

            <div className="form-group mb-3">
              <input
                type="number"
                className={phoneInputClass}
                id="exampleFormControlInput1"
                placeholder="Phone"
                value={entredPhone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                name="phone"
              />
              {phoneInputHasError && (
                <p className="text-error">Phone number must be 10 digit!</p>
              )}
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className={emailInputClass}
                id="exampleFormControlInput1"
                placeholder="Email"
                name="email"
                value={entredEmail}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
              />
              {emailInputHasError && (
                <p className="text-error">Please enter valid email address!</p>
              )}
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className={subjectInputClass}
                id="exampleFormControlInput1"
                placeholder="Subject"
                name="subject"
                value={entredSubject}
                onChange={subjectChangeHandler}
                onBlur={subjectBlurHandler}
              />
              {subjectInputHasError && (
                <p className="text-error">Subject must not be empty!</p>
              )}
            </div>

            <div className="form-group mb-3">
              <textarea
                className={descriptionInputClass}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Please describe shortly your project"
                name="description"
                value={entredDescription}
                onChange={descriptionChangeHandler}
                onBlur={descriptionBlurHandler}
              ></textarea>
              {descriptionInputHasError && (
                <p className="text-error">Description must not be empty!</p>
              )}
            </div>

            <div className="form-group mb-3 text-center">
              <button
                type="submitt"
                disabled={!formIsValid}
                className="btn btn-outline-success text-uppercase"
              >
                Contact me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
