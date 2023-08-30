import React from "react";
import { Link } from "react-router-dom";

const MyPlayGround = () => {
  return (
    <div className="flexcode-container">
      <div className="border-b-2 border-[#0fcda185] pb-3">
        <div>
          <h1 className="text-white text-2xl md:text-4xl tracking-wider font-semibold">
            My PlayGround
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-1">
            Flex Your Knowladge In this PlayGround And Proved Yourself.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-10">
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
