import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// import { Container } from './styles';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
};

export default ErrorPage;