import React, {useState} from 'react';
import UserServices from "../../services/UserServices";
import {LS_KEY} from "../../config/config";

function LoginPage() {
    const [inputData, setInputData,] = useState({
        password: "",
        email: "",
    });

    const inputHandler = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        UserServices.login(inputData)
            .then((res) => {
                if (res.status === 201) {
                    console.log(res.data.msg)
                } else {
                    console.log(res.data)
                    localStorage.setItem(LS_KEY, res.data.token)
                }
            })
            .catch((err) => {
                console.log("GRESKA")
                console.log(err)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="form-signin w-100 m-auto">
                        <form onSubmit={submitHandler}>
                            <h1 className="h3 mb-3 fw-normal">Login</h1>
                            <input
                                type="email"
                                className="form-control mb-3"
                                name="email"
                                placeholder="Email address"
                                value={inputData.email}
                                onInput={inputHandler}
                            />
                            <input
                                type="password"
                                className="form-control mb-3"
                                name="password"
                                placeholder="Password"
                                value={inputData.password}
                                onInput={inputHandler}
                            />
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    );
}

export default LoginPage;