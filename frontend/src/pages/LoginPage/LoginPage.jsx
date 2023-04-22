import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./_loginForm.scss";
import { routes } from "../../router/routes";
import UserServices from "../../services/UserServices";
import { LS_TOKEN } from "../../config/config";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setUser } from "../../store/userSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      UserServices.login(values)
        .then((res) => {
          if (res.status === 201) {
            console.log(res.data.msg);
          } else {
            dispatch(setUser(res.data.user));
            localStorage.setItem(LS_TOKEN, res.data.token);
            toast.success("You are logged in");
            setTimeout(() => {
              navigate(routes.DASHBOARD.path);
            }, 3000);
          }
        })
        .catch((err) => {
          console.log("GRESKA");
          console.log(err);
        });
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
          <Link to={routes.REGISTER.path}>
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
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
