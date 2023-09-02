import React from "react";
import AdminSideBar from "./AdminSideBar/AdminSideBar";
import AdminMainContent from "./AdminMainContent/AdminMainContent";

const AdminDashboard = () => {
  return (
    <div className="w-full">
      {/* <AdminSideBar></AdminSideBar> */}
      <AdminMainContent></AdminMainContent>
    </div>
  );
};

export default AdminDashboard;
