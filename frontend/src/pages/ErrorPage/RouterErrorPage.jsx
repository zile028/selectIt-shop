import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { routes } from "../../router/routes";
const ErrorPage = () => {
  const { data, status, statusText, error } = useRouteError();
  console.log(error);
  return (
    <div>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">{status}</h1>
          <h2>{statusText}</h2>
          <p class="fs-3">
            <span class="text-danger">Oops!</span> Page not found.
          </p>
          <p class="lead">{data}</p>
          <Link to={routes.HOME.path} class="btn btn-primary">
            Go Home
          </Link>
          <pre>
            <code>{error.stack}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
