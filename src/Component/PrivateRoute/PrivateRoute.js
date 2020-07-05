import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../Auth";

export default ({ component: Component, ...rest }) => {
  const isAuthenticated = Auth.isAuthenticatedCheck();

  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    />
  );
};
