import React, {useState} from "react";
import ContactServices from "../../services/ContactServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateEmail = (email) => {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

const ContactForm = () => {
    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }

    const [inputData, setInputData] = useState(initialState);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const notify = () => toast.success('Your message was sent.', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
    );

    const inputHandler = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    };

    const isFormValid = (data) => {

        !data.name ? setIsNameValid(false) : setIsNameValid(true);
        !validateEmail(data.email) ? setIsEmailValid(false) : setIsEmailValid(true);

        if (validateEmail(data.email) && data.name !== '') {
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
                    notify()
                    setInputData(initialState);
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
                            {isNameValid ? "Your name *" : "Name is required."}
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
                    </div>

                    <div className="form__input">
                        <label
                            className="form__label"
                            htmlFor="email"
                            style={isEmailValid ? {color: ""} : {color: "#f95959"}}
                        >
                            {isEmailValid ? "Your email *" : "Email is not valid."}
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
                    <ToastContainer
                        position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                )
            }

        </div>
    );
};

export default ContactForm;


