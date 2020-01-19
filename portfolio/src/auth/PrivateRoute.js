import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      localStorage.getItem("auth-token") !== null ? (
        children
      ) : (
        <Redirect to={{ pathname: "/blog/dashboard/login", state: { from: location } }} />
      )
    }
  />
);
export default PrivateRoute;