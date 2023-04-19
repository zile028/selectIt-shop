import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/style/_loginForm.scss";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      ///handle UserService.login here
    },
  });
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>SELECTIT SHOP</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            eligendi voluptate magni accusantium distinctio alias, officiis
            soluta voluptatum facere vel!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">
              {formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="password">
              {formik.errors.password && (
                <div className="error">{formik.errors.password}</div>
              )}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
