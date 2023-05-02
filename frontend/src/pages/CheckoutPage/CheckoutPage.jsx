import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {setUser} from "../../store/userSlice";
import {useNavigate} from "react-router-dom";
import {routes} from "../../router/routes";

function CheckoutPage() {
    const {user} = useSelector((state) => state.userStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            address: user.address || "",
            city: user.city || "",
            postCode: user.postCode || "",
            phone: user.phone || "",
            email: user.email || "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            firstName: Yup.string().min(3, "First name must have minimum 3 character.").max(35).required("First name is required"),
            lastName: Yup.string().min(3).max(35).required("Last name is required"),
            address: Yup.string().min(3).required("Address is required"),
            city: Yup.string().min(3).required("City is required"),
            postCode: Yup.string().min(3).required("Postcode is required"),
            phone: Yup.string().min(3).required("Phone is required"),
            email: Yup.string()
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
                .required("Email is required"),
        }),
        
        onSubmit: (values) => {
            dispatch(setUser(values))
            navigate(routes.PAYMENT_INIT.path)
        }
    })

    const showError = (name) => {
        return formik.errors[name] && formik.touched[name] && (
            <span className="error">{formik.errors[name]}</span>
        )
    }

    return (
        <div className="container py-5">
            <h2>Checkout</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form onSubmit={formik.handleSubmit}>
                        <label>First name {showError("firstName")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />

                        <label>Last name {showError("lastName")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />

                        <label>Email {showError("email")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />

                        <label>Phone {showError("phone")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />

                        <label>Address {showError("address")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />

                        <label>City {showError("city")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                        />

                        <label>Post code {showError("postCode")}</label>
                        <input
                            className="form-control mb-3"
                            type="text"
                            name="postCode"
                            value={formik.values.postCode}
                            onChange={formik.handleChange}
                        />
                        <button className="button button--primary" type="submit">Proceed to payment</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default CheckoutPage;