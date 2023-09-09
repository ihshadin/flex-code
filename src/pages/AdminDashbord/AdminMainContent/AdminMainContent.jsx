import React from "react";
import OverViewAd from "./OverViewAd/OverViewAd";
import UserRationChart from "./UserRatioChart/UserRationChart";

const AdminMainContent = () => {
  return (
    <div className="px-4 grid gap-3">
      <OverViewAd />
      <UserRationChart />
    </div>
  );
};

export default AdminMainContent;
