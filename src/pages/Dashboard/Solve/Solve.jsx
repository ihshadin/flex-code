import React from "react";
import {
  FaAngleRight,
  FaRegCheckSquare,
  FaRegCommentDots,
  FaRegListAlt,
} from "react-icons/fa";

const Solve = () => {
  return (
    <div className="bg-secondary-color text-white md:ml-5 mt-4 rounded-lg h-[255px]">
      <div className="flex justify-between px-5 pt-4">
        <div className="flex gap-8">
          <div className="flex gap-x-1 items-center">
            <FaRegListAlt /> <p>Recent AC</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <FaRegCheckSquare /> <p>Solutions</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <FaRegCommentDots /> <p>Discuss</p>
          </div>
        </div>
        <div className="flex gap-x-1 items-center">
          <p>View all submissions</p> <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Solve;
