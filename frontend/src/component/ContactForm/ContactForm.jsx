import React, {useState} from "react";
import ContactServices from "../../services/ContactServices";
import {FaCheck} from "react-icons/fa";

const ContactForm = () => {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const inputHandler = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    };

    const isFormValid = (data) => {

        !data.name ? setIsNameValid(false) : setIsNameValid(true);
        !data.email.includes('@' && '.') ? setIsEmailValid(false) : setIsEmailValid(true);

        if (data.email.includes('@' && '.') && data.name !== '') {
            return true;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let validation = isFormValid(inputData);

        if (validation) {
            ContactServices.contactMessage(inputData)
                .then((res) => {
                    setIsMessageSent(true);
                    setInputData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                })
                .catch((err) => {
                    setIsMessageSent(false)
                })
        }
    };

    return (
        <div className="form__container">
            <h3 className="form__title">Get in touch with us</h3>
            <form className="form__contact" onSubmit={submitHandler}>
                <div className="form__row">
                    <div className="form__input form__input--separated">
                        <label
                            className="form__label"
                            htmlFor="name"
                            style={isNameValid ? {color: ""} : {color: "#f95959"}}
                        >
                            Your name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form__input-text"
                            value={inputData.name}
                            onInput={inputHandler}
                            style={isNameValid ? {borderColor: ""} : {borderColor: "#f95959"}}
                        />
                        <p className="form__input-error">{isNameValid ? '' : "Name is required."}</p>
                    </div>

                    <div className="form__input">
                        <label
                            className="form__label"
                            htmlFor="email"
                            style={isEmailValid ? {color: ""} : {color: "#f95959"}}
                        >
                            Your email *
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form__input-text"
                            value={inputData.email}
                            onInput={inputHandler}
                            style={isEmailValid ? {borderColor: ""} : {borderColor: "#f95959"}}
                        />
                        <p className="form__input-error">{isEmailValid ? '' : "Email is not valid."}</p>
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

            {
                isMessageSent && (
                    <>
                        <div className="form__confirmation">
                            <span className="form__icon-check"><FaCheck/></span>
                            <p className="form__msg">Your message has been sent.</p>
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default ContactForm;


