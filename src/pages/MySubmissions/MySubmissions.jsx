import React, { useState, useEffect } from "react";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import useFlexUser from "../../Hooks/useFlexUser";
import { motion } from "framer-motion";

const MySubmissions = () => {
  const [flexUser] = useFlexUser();
  const [mySolvedProblems, setMySolvedProblems] = useState([]);
  const [axiosNormal] = useAxiosNormal();

  function formatDateDifference(solvedDate) {
    const currentDate = new Date();
    const solvedDateObj = new Date(solvedDate);
    const timeDifference = currentDate - solvedDateObj;

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30 * millisecondsPerDay;
    const millisecondsPerYear = 365 * millisecondsPerDay;

    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor(
      (timeDifference % millisecondsPerYear) / millisecondsPerMonth
    );
    const days = Math.floor(
      (timeDifference % millisecondsPerMonth) / millisecondsPerDay
    );

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    return "Today";
  }

  useEffect(() => {
    axiosNormal
      .get(`/solvedProblems/userSolveProblem/${flexUser?.username}`)
      .then((data) => {
        setMySolvedProblems(data);
      });
  }, [flexUser?.username]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      key="flex_0989"
      className="flexcode-banner-bg pt-16 overflow-x-auto"
    >
      <div className="flexcode-container">
        <div className="border-b-2 border-[#0fcda185] pb-3">
          <h1 className="text-white text-2xl md:text-4xl tracking-wider font-semibold">
            My Submissions
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-1">
            Dive into a World of Problem Solving Excellence
          </p>
        </div>
        <div className="text-white mt-12 pb-10 md:p-10 rounded-2xl overflow-x-auto">
          <table className="table table-pin-rows table-auto">
            <thead>
              <tr className="text-white border-0 bg-transparent text-sm tracking-wider">
                <th>Submitted Time</th>
                <th>Question</th>
                <th>Lavel</th>
                <th>Status</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {mySolvedProblems.map((problem) => (
                <tr key={problem._id} className="border-0 [&>*]:p-0 group">
                  <td>
                    <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-l-3xl">
                      {formatDateDifference(problem.date)}
                    </div>
                  </td>
                  <td>
                    <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap">
                      {problem.title}
                    </div>
                  </td>
                  <td>
                    <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color capitalize">
                      {problem.level}
                    </div>
                  </td>
                  <td>
                    <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-color rounded-full flex-shrink-0"></div>
                      <strong>Accepted</strong>
                    </div>
                  </td>
                  <td>
                    <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-r-3xl">
                      {problem.language}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default MySubmissions;
