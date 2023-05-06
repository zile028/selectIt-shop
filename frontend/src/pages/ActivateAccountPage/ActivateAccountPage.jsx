import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import UserServices from "../../services/UserServices";
import {routes} from "../../router/routes";

function ActivateAccountPage() {
    const {id} = useParams()
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        UserServices.activateAccount(id)
            .then(() => {
                setMessage("Your account is activated.")
                setTimeout(() => {
                    navigate(routes.LOGIN.path)
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
                setMessage("Something went wrong, maybe bad activation link.")
                setTimeout(() => {
                    navigate(routes.REGISTER.path)
                }, 5000)
            })

    }, []);


    return (
        <div>
            <h1>Welcome to activation account</h1>
            <p>{message}</p>
        </div>
    );
}

export default ActivateAccountPage;