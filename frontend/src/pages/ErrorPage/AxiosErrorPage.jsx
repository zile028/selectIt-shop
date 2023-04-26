import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import Logo from "../../assets/logo.png";
const AxiosErrorPage = ({ axiosError }) => {
  const { code, message, name } = axiosError;
  return (
    <div className="container my-5">
      <div className="d-flex align-items-center justify-content-center">
     
        <div className="text-center">
        <img src={Logo} alt="SelectIt Shop" />
          <h1 className="fw-bold bg-danger p-3 mt-3">{code}</h1>
          <h2>{message}</h2>
          <p className="fs-3">
            <span className="text-danger">Oops!</span> Something went wrong.
          </p>
          <p className="lead">{name} - Can not fetch data from backend.</p>
          <Link to={routes.HOME.path} className="button button--primary ">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AxiosErrorPage;
