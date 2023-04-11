import React, { useState } from "react";
import UserServices from "../../services/UserServices";
import "./register.scss";
function RegisterPage() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    UserServices.register(inputData)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log("GRESKA");
        console.log(err);
      });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            eligendi voluptate magni accusantium distinctio alias, officiis
            soluta voluptatum facere vel!
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={inputHandler}
              value={inputData.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={inputHandler}
              value={inputData.lastName}
            />
            <input
              type="text"
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

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
