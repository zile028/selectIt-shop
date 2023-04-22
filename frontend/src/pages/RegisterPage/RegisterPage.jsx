import React, {useState} from "react";
import UserServices from "../../services/UserServices";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import "./_registerForm.scss";
import {useFormik} from "formik";
import {routes} from "../../router/routes";

function RegisterPage() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {firstName: "", lastName: "", password: "", email: ""},

        validationSchema: Yup.object({
            firstName: Yup.string().min(3, "First name must have minimum 3 character.").max(35).required("First name is required"),
            lastName: Yup.string().min(3).max(35).required("Last name is required"),
            email: Yup.string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
                .required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            UserServices.register(values)
                .then((res) => {
                    if (res.status === 201) {
                        console.log(res.data.msg);
                    } else {
                        navigate(routes.LOGIN.path)
                    }
                })
                .catch((err) => {
                    console.log("GRESKA");
                    console.log(err);
                });
        },
    });

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <div className="error">{formik.errors[name]}</div>
        )
    }

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>SELECTIT SHOP</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
                        eligendi voluptate magni accusantium distinctio alias, officiis
                        soluta voluptatum facere vel!
                    </p>
                    <span>Do you have an account?</span>
                    <Link to={routes.LOGIN.path}>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <label
                            htmlFor="firstName">{showError("firstName")}</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        <label htmlFor="lastName">{showError("lastName")}</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        <label htmlFor="email">{showError("email")}</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <label htmlFor="password">{showError("password")}</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
