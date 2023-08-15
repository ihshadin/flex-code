import React from "react";
import DbUser from "../DbUser/DbUser";
import SolvedProblems from "../SolvedProblems/SolvedProblems";
import Badges from "../Badges/Badges";
import Submissions from "../Submissions/Submissions";
import Solve from "../Solve/Solve";

const DashboardHome = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 w-[100%] mt-[5rem] md:p-[2rem] p-[0.5rem]">
      <div className="md:w-[30%]">
        <DbUser></DbUser>
      </div>
      <div className="md:w-[70%]">
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:ml-5">
          <SolvedProblems></SolvedProblems>
          <Badges></Badges>
        </div>
        <Submissions></Submissions>
        <Solve />
      </div>
    </div>
  );
};

export default DashboardHome;
