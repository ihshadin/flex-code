import React, { useContext, useEffect, useState } from "react";
import { FaAngleRight, FaRegListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const RecentActiviy = ({ mySolvedProblems }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [dateDifferences, setDateDifferences] = useState([]);

  function formatDateDifference(solvedDate) {
    const currentDate = new Date();
    const solvedDateObj = new Date(solvedDate);
    const timeDifference = currentDate - solvedDateObj;

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30 * millisecondsPerDay;
    const millisecondsPerYear = 365 * millisecondsPerDay;

    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor((timeDifference % millisecondsPerYear) / millisecondsPerMonth);
    const days = Math.floor((timeDifference % millisecondsPerMonth) / millisecondsPerDay);

    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    return 'Today';
  }

  useEffect(() => {
    const calculateDateDifferences = () => {
      const formattedDifferences = mySolvedProblems.map((problem) => {
        const dateDifference = formatDateDifference(problem.date);
        return { _id: problem._id, dateDifference };
      });

      setDateDifferences(formattedDifferences);
    };

    calculateDateDifferences();
  }, [mySolvedProblems]);

  return (
    <div className="bg-secondary-color text-white md:ml-5 mt-4 rounded-lg overflow-hidden py-3 px-5 h-[250px]">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <div className="flex gap-x-1 items-center">
            <FaRegListAlt /> <p>Recent Solved Problem</p>
          </div>
          {/* <div className="flex gap-x-1 items-center">
            <FaRegCheckSquare /> <p>Solutions</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <FaRegCommentDots /> <p>Discuss</p>
          </div> */}
        </div>
        <div className="flex gap-x-1 items-center">
          <Link to={'/my-submittions'}>View all submissions</Link> <FaAngleRight />
        </div>
      </div>
      <div>
        {mySolvedProblems ?
          mySolvedProblems.slice(0, 3).map((problem) => (
            <div key={problem._id} className="flex justify-between border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl">
              <h3>{problem.title}</h3>
              <p>{formatDateDifference(problem.date)}</p>
            </div>
          )).sort((a, b) => {
            if (a.props.children[1].props.children.includes("Today")) {
              return -1;
            } else if (b.props.children[1].props.children.includes("Today")) {
              return 1;
            } else {
              return 0;
            }
          }) : (
            <p>No Solutions</p>
          )
        }
      </div>
    </div>
  );
};

export default RecentActiviy;
