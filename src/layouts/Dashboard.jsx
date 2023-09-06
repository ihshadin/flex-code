import React from "react";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import useFlexUser from "../Hooks/useFlexUser";
import AdminDashboard from "../pages/AdminDashbord/AdminDashboard";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";

const Dashboard = () => {
  const [flexUser] = useFlexUser();

  return (
    <>
      {
        flexUser ? (
          flexUser?.userRole === 'admin' ? (
            <AdminDashboard />
          ) : (
            <DashboardHome />
          )
        ) : (
          <FlexcodeLoading />
        )
      }
    </>
  );
};

export default Dashboard;
