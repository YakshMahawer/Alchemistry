import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  // Check if token exists in cookie or any other method you are using to store the token
  const isAuthenticated = !!document.cookie.token;

  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoute;
