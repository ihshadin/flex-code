import React from "react";
import {
  FaAngleRight,
  FaRegCheckSquare,
  FaRegCommentDots,
  FaRegListAlt,
} from "react-icons/fa";

const Solve = () => {
  return (
    <div className="bg-[#1e2d40] md:ml-5 mt-4 rounded-lg h-[300px] text-base-300">
      <div className="flex justify-between px-5 pt-4">
        <div className="flex gap-8">
          <>
            <div className="flex gap-x-1 items-center">
              <FaRegListAlt /> <p className="mb-1">Recent AC</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <FaRegCheckSquare /> <p className="mb-1">Solutions</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <FaRegCommentDots /> <p className="mb-1">Discuss</p>
            </div>
          </>
        </div>
        <div className="flex gap-x-1 items-center">
          <p className="mb-1">view all submissions</p> <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Solve;
