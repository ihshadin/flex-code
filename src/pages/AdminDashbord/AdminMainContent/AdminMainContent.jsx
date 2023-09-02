import React from "react";
import OverViewAd from "./OverViewAd/OverViewAd";
import ProblemsChart from "./ProblemSChart/ProblemsChart";
import UserRationChart from "./UserRatioChart/UserRationChart";

const AdminMainContent = () => {
  return (
    <div className="px-4 grid gap-5">
      <OverViewAd />
      <UserRationChart />

      {/* Problem Chart */}
      {/* <div className="mt-6 w-[30%] bg-secondary-color p-5">
        <h3 className="text-xl font-semibold mb-4">Problem Distribution</h3>
        <ProblemsChart></ProblemsChart>
      </div> */}
    </div>
  );
};

export default AdminMainContent;
