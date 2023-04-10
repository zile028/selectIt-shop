import React, {useState} from 'react';
import UserServices from "../../services/UserServices";

function RegisterPage() {
    const [inputData, setInputData,] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
    });

    const inputHandler = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        UserServices.register(inputData)
            .then((res) => {
                if (res.status === 201) {
                    console.log(res.data.msg)
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
                            <h1 className="h3 mb-3 fw-normal">Please register</h1>
                            <input
                                type="text"
                                className="form-control mb-3"
                                name="firstName"
                                placeholder="First name"
                                value={inputData.firstName}
                                onInput={inputHandler}
                            />

                            <input type="text"
                                   className="form-control mb-3"
                                   name="lastName"
                                   placeholder="Last name"
                                   value={inputData.lastName}
                                   onInput={inputHandler}
                            />
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
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    );
}

export default RegisterPage;