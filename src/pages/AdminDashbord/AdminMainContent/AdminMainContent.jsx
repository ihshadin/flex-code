import React from "react";
import OverViewAd from "./OverViewAd/OverViewAd";
import ProblemsChart from "./ProblemSChart/ProblemsChart";
import UserRationChart from "./UserRatioChart/UserRationChart";

const AdminMainContent = () => {
  return (
    <div className="px-4">
      <div className="bg-secondary-color p-5 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-400">OverView</h3>
        <OverViewAd></OverViewAd>
      </div>

      {/* User Ratio Chart */}
      <div className="mt-6 w-full py-5 bg-secondary-color rounded-lg">
        <h3 className="text-xl font-semibold mb-4 ps-5">
          User Ratio Over Time
        </h3>
        <UserRationChart></UserRationChart>
      </div>

      {/* Problem Chart */}
      {/* <div className="mt-6 w-[30%] bg-secondary-color p-5">
        <h3 className="text-xl font-semibold mb-4">Problem Distribution</h3>
        <ProblemsChart></ProblemsChart>
      </div> */}
    </div>
  );
};

export default AdminMainContent;
