import React, {useEffect, useState} from "react";
import SubService from "../../services/SubService";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [subData, setSubData] = useState({email: ""});

  const inputHandler = (e) => {
    setSubData({...subData, [e.target.name]: e.target.value});

  };

  const submitSub = () => {
    // console.log(subData);
    SubService.subscribe(subData)
        .then((res) => {
          if (res.status === 201) {
            console.log(res.data.msg);
            toast.warning(res.data.msg); // Show error toast with default message
          } else {
            console.log(res.data.msg);
            toast.success(res.data.msg); // Show success toast with response message
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error occurred"); // Show error toast with default message
        });
    setSubData({email: ""});
  };

  return (
      <>
        <ToastContainer/>
        <div className="subscribe">
          <div className="top-section">
            <h5>Our Latest Collection</h5>
            <h3>SAVE 50% OFF SALE</h3>
            <p>Be the first known about latest and modern furniture</p>
          </div>
          <div className="input">
            <input
                className="input-field"
                type="text"
                placeholder="Your Email Address"
                name="email"
                value={subData.email}
                onInput={inputHandler}
            />
            <span className="input-button" onClick={submitSub}>
            Sign Up
          </span>
          </div>
        </div>
      </>
  );
};

export default Subscribe;
