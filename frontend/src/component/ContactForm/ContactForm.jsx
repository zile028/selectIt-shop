import React from "react";

const ContactForm = () => {
  return (
    <div className="form__container">
      <h3 className="form__title">Get in touch with us</h3>
      <form className="form__contact">
        <div className="form__row">

          <div className="form__input form__input--separated">
            <label 
                className="form__label" 
                htmlFor="name"
            >
                Your name *
            </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                className="form__input-text"
            />
          </div>

          <div className="form__input">
            <label 
            className="form__label" 
            htmlFor="email"
            >
                Your email *
            </label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                className="form__input-text"
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__input">
            <label 
                className="form__label" 
                htmlFor="subject"
            >
                Subject
            </label>
            <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="form__input-text"
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__input">
            <label 
                className="form__label" 
                htmlFor="message"
            >
                Your message
            </label>
            <textarea 
                id="message" 
                name="message" 
                rows={5} 
                className="form__textarea"
            />
          </div>
        </div>

        <button type="submit" className="button button--primary">Send a message</button>
      </form>
    </div>
  );
};

export default ContactForm;
