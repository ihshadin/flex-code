import React from "react";
import badges from "../../../assets/badges.png";

const Badges = () => {
  return (
    <div className="bg-secondary-color rounded-lg min-h-[186px] w-1/2 pt-4 pb-3">
      <p className="pl-4 pt-4 text-sm font-semibold text-slate-300">Badges</p>
      <p className="pl-4 text-3xl font-semibold">0</p>
      <div className="flex justify-end mr-8">
        <img className="w-[70px]" src={badges} alt="" />
      </div>
      <p className="pl-4 text-sm text-slate-300">Practice More</p>
      <p className="pl-4 text-sm">Flex Your Coding Challenge</p>
    </div>
  );
};

export default Badges;
