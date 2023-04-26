import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { routes } from "../../router/routes";
import Logo from "../../assets/logo.png";
const ErrorPage = () => {
  const { data, status, statusText, error } = useRouteError();
  console.log(error);
  return (
    <div>
      <div class="d-flex align-items-center justify-content-center vh-100">
        
        <div class="text-center">
        <img src={Logo} alt="SelectIt Shop" />
          <h1 class="display-1 fw-bold bg-danger mt-5">{status}</h1>
          <h2>{statusText}</h2>
          <p class="fs-3">
            <span class="text-danger">Oops!</span> Page not found.
          </p>
          <p class="lead">{data}</p>

          <code>
            
            <pre>{error.stack}</pre>
          </code>

          <Link to={routes.HOME.path} class="button button--primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
