import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { routes } from "../../router/routes";
import Logo from "../../assets/logo.png";
const ErrorPage = () => {
  const { data, status, statusText, error } = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        
        <div className="text-center">
        <img src={Logo} alt="SelectIt Shop" />
          <h1 className="display-1 fw-bold bg-danger mt-5">{status}</h1>
          <h2>{statusText}</h2>
          <p className="fs-3">
            <span className="text-danger">Oops!</span> Page not found.
          </p>
          <p className="lead">{data}</p>

          <code>
            
            <pre>{error.stack}</pre>
          </code>

          <Link to={routes.HOME.path} className="button button--primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
