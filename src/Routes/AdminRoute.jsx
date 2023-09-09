import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";

const AdminRoute = ({ children }) => {
  const loaction = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <FlexcodeLoading />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: loaction }} replace></Navigate>;
};

export default AdminRoute;
