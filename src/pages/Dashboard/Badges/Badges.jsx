import React from "react";
import badges from "../../../assets/badges.png";
import useTopperData from "../../../Hooks/useTopperData";
import useAuth from "../../../Hooks/useAuth";

const Badges = () => {
  const { user } = useAuth();
  const [topperData] = useTopperData();

  // User Rank 
  const myRank = topperData?.find(problem => problem.userEmail === user?.email)

  const badgeImages = {
    'Flex-Mastermind': 'https://i.ibb.co/KyNxjBn/flex-mastermind.png',
    'Flex-Legend': 'https://i.ibb.co/ydbJSgz/flex-legend.png',
    'Flex-Hero': 'https://i.ibb.co/CbVCWdj/Flex-hero.png',
    'Flex-Wizard': 'https://i.ibb.co/7v2cCQr/flex-wizard.png',
    'Flex-Ninja': 'https://i.ibb.co/kMd0Cfm/Flex-Ninja.png',
    'Flex-Solver': 'https://i.ibb.co/2vMHBSd/flex-solver.png',
  }

  function getBadge(solvedProblem) {
    if (solvedProblem >= 50) {
      return "Flex-Mastermind";
    } else if (solvedProblem >= 38) {
      return "Flex-Legend";
    } else if (solvedProblem >= 27) {
      return "Flex-Hero";
    } else if (solvedProblem >= 19) {
      return "Flex-Wizard";
    } else if (solvedProblem >= 13) {
      return "Flex-Ninja";
    } else if (solvedProblem >= 5) {
      return "Flex-Solver";
    } else {
      return null;
    }
  }

  const badge = getBadge(myRank?.problemsSolved);

  const badgeImageUrl = badgeImages[badge];

  return (
    <div className="bg-secondary-color rounded-lg h-[150px] md:h-[186px] w-full md:w-1/2 p-4">
      <div className="flex h-full">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-300">Badges</p>
            <p className="text-xl md:text-2xl font-semibold">{badge || "No Badge"}</p>
            {badge === null && <p className="text-xs text-slate-400">You need to solve more problems to earn badge</p>}
          </div>
          <div className="mt-auto">
            <p className="text-sm text-slate-300">Practice More</p>
            <p className="text-sm">Flex Your Coding Challenge</p>
          </div>
        </div>
        <div className="ml-auto self-center shrink-0">
          <img className="w-[100px] md:w-[130px]" src={badgeImageUrl || ""} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Badges;
