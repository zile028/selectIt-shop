import React, { useState } from "react";
import ContactServices from "../../services/ContactServices";


const ContactForm = () => {

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ContactServices.contactMessage(inputData)
            .then((res) => {
                console.log(res)
                setInputData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
              });
            })
            .catch((err) => {
                console.log("GRESKA")
                console.log(err)
            })
    
  };

  return (
    <div className="form__container">
      <h3 className="form__title">Get in touch with us</h3>
      <form className="form__contact" onSubmit={submitHandler}>
        <div className="form__row">
          <div className="form__input form__input--separated">
            <label className="form__label" htmlFor="name">
              Your name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form__input-text"
              value={inputData.name}
              onInput={inputHandler}
            />
          </div>

          <div className="form__input">
            <label className="form__label" htmlFor="email">
              Your email *
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form__input-text"
              value={inputData.email}
              onInput={inputHandler}
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__input">
            <label className="form__label" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form__input-text"
              value={inputData.subject}
              onInput={inputHandler}
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__input">
            <label className="form__label" htmlFor="message">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="form__textarea"
              value={inputData.message}
              onInput={inputHandler}
            />
          </div>
        </div>

        <button type="submit" className="button button--primary">
          Send a message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;


