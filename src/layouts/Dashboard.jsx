import React from "react";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import useFlexUser from "../Hooks/useFlexUser";
import AdminDashboard from "../pages/AdminDashbord/AdminDashboard";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [flexUser] = useFlexUser();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      key="flex_090456"
    >
      {flexUser ? (
        flexUser?.userRole === "admin" ? (
          <AdminDashboard />
        ) : (
          <DashboardHome />
        )
      ) : (
        <FlexcodeLoading />
      )}
    </motion.div>
  );
};

export default Dashboard;
