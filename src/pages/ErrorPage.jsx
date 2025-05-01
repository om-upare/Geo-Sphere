import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops! An Error Occurred</h1>
        {error && (
          <p className="error-message">
            {error.data || "Something went wrong."}
          </p>
        )}
        <NavLink to="/">
          <button>Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};
