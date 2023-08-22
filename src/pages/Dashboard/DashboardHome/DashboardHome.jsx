import React from "react";
import DbUser from "../DbUser/DbUser";
import SolvedProblems from "../SolvedProblems/SolvedProblems";
import Badges from "../Badges/Badges";
import Submissions from "../Submissions/Submissions";
import Solve from "../Solve/Solve";
import { useNavigation } from "react-router-dom";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";

const DashboardHome = () => {

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  return (
    <div className="flexcode-container flex flex-col md:flex-row gap-3 md:gap-0 w-[100%]">
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
