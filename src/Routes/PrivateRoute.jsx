import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <FlexcodeLoading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;