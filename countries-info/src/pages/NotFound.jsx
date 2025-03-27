import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops! An error occured.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button>Go Back to Home!</button>
      </NavLink>
    </div>
  );
}

export default NotFound;
