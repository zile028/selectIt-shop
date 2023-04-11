import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const LoginPage = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputHandler}
              value={inputData.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={inputHandler}
              value={inputData.password}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
