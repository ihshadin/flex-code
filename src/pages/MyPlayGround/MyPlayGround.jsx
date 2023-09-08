import React from "react";
import { Link } from "react-router-dom";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import { SiAirplayaudio } from 'react-icons/si';

const MyPlayGround = () => {
  return (
    <div className="flexcode-container">

        <PageBannerTitle
          title="My PlayGround"
          shortDesc="Flex Your Knowledge In this PlayGround And Proved Yourself"
          btnLink={"/playground"}
          btnText1="Click For Play"
          btnText2="Play With HTML, Css & js"
          btnIcon={
            <SiAirplayaudio className="w-12 h-14 text-[#0fcda1]"/>
          }
        />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <Link to="/playground">
          <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#0fcda1] transition-all exploreCard drop-shadow-md cursor-pointer">
            <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]">
              Click For Play
            </p>
            <h1 className="text-[1.2rem] text-white font-semibold tracking-wider">
              Play With Row
            </h1>
            <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
              HTML, Css & JavaScript
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyPlayGround;
