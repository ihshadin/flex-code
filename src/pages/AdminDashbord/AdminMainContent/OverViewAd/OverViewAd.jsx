import React from "react";
import { FaUserAlt, FaArrowUp } from "react-icons/fa";
import { FaUsers, FaBug } from "react-icons/fa6";

const OverViewAd = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* total users  */}
      <div className="rounded-lg border border-stroke bg-[#1e2d40] py-4 px-8 shadow-lg">
        <div className="flex">
          <FaUserAlt className="w-12 h-12 text-blue-400"></FaUserAlt>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white dark:text-white">
              $3.456K
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total Users
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>

      {/* Total Problem  */}
      <div className="rounded-lg border border-stroke bg-[#1e2d40] py-4 px-8 shadow-lg">
        <div className="flex">
          <FaBug className="w-12 h-12 text-blue-400"></FaBug>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white dark:text-white">
              $3.456K
            </h4>
            <span className="text-sm font-medium text-slate-200 mt-2">
              Total Problem
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>

      {/* Solved Problems  */}
      <div className="rounded-lg border border-stroke bg-[#1e2d40] py-4 px-8 shadow-lg">
        <div className="flex">
          <FaBug className="w-12 h-12 text-blue-400"></FaBug>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white dark:text-white mr-8">
              $3.456K
            </h4>
            <span className="text-sm font-medium text-slate-200 mt-2">
              Total Problem Solve
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>

      {/* Premium users  */}
      <div className="rounded-lg border border-stroke bg-[#1e2d40] py-4 px-8 shadow-lg">
        <div className="flex">
          <FaUsers className="w-12 h-12 text-blue-400"></FaUsers>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white dark:text-white mr-14">
              $3.456K
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total Premium Solve
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverViewAd;
