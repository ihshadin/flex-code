import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiFemaleVampire, GiNurseFemale, GiRank3 } from "react-icons/gi";
import useTopperData from "../../../Hooks/useTopperData";
import useFlexUser from "../../../Hooks/useFlexUser";
import useAuth from "../../../Hooks/useAuth";
import {
  FaBirthdayCake,
  FaCrown,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const DbUserSideBar = ({ mySolvedProblems, username }) => {
  const [fullUserDetails, setFullUserDetails] = useState({});
  const [problemsByLanguage, setProblemsByLanguage] = useState({});
  const [topperData] = useTopperData();
  const [axiosSecure] = useAxiosSecure();
  const [flexUser] = useFlexUser();
  const { user } = useAuth();
  const mainUserName = username || flexUser?.username;
  const userEmail = user?.email;
  const flexUserEmail = fullUserDetails?.email;

  useEffect(() => {
    axiosSecure.get(`/users/${mainUserName}`).then((user) => {
      setFullUserDetails(user.data);
    });
  }, [mainUserName]);

  // console.log("dbuserSbar---oneuser--fullUserDetails", fullUserDetails);
  // console.log("dbuserSbar---oneuser--name", flexUser);
  // console.log("dbuserSbar---oneuser--userEmail", userEmail);

  // Calculate last week
  const currentDate = new Date();
  const lastWeekDate = new Date();
  lastWeekDate.setDate(currentDate.getDate() - 7);
  const formattedDate = fullUserDetails?.dateOfBirth?.slice(0, 10);
  
  // Last week solutions
  const lastWeekSolvedProblems = mySolvedProblems.filter(
    (problem) => new Date(problem.date) >= lastWeekDate
  );
  // Last week points
  const lastWeekTotalPoints = mySolvedProblems
    .filter((problem) => new Date(problem.date) >= lastWeekDate)
    .reduce((total, problem) => total + problem.points, 0);
  // User Rank
  const myRank = topperData?.find((problem) => problem.username === username);

  useEffect(() => {
    const problemsCount = mySolvedProblems.reduce((acc, problem) => {
      const language = problem.language;
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {});
    setProblemsByLanguage(problemsCount);
  }, [mySolvedProblems]);

  useEffect(() => { });

  return (
    <section>
      <div className="bg-secondary-color flex flex-col rounded-lg min-w-[300px] w-full px-4 py-5">
        {/* User Info */}
        <div className="text-slate-300  flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="relative flex h-20 w-20 shrink-0">
              <img
                src={fullUserDetails?.userPhotoUrl}
                alt="Avatar"
                className="h-20 w-20 p-1 border border-[#0fcda185] rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col py-1">
              <div className="text-lg text-white font-semibold ">
                {fullUserDetails?.name}{" "}
                {fullUserDetails?.isPremium === true && (
                  <FaCrown className="text-amber-400 inline ml-1 mb-2" />
                )}
              </div>
              <div className="flex flex-1 items-end space-x-[5px] text-base text-white">
                <span className="text-slate-300 ">Rank ~</span>
                <span className="text-slate-200 font-medium">
                  {myRank?.rank || 0}
                </span>
              </div>
            </div>
          </div>
          {userEmail === flexUserEmail && (
            <Link
              className="bg-[#0fcda1] bg-opacity-50 text-[#b0c9ec] border border-[#0fcda1] border-transparent hover:bg-transparent hover:border hover:border-[#0fcda1] hover:text-[#0fcda1] hover:transition-all hover:duration-500 w-full rounded-lg py-[7px] text-center font-medium"
              to="/profile"
            >
              Edit Profile
            </Link>
          )}
          {
            (fullUserDetails?.fbLinks || fullUserDetails?.github || fullUserDetails?.LinkLinks || fullUserDetails?.webSiteLink) && (
              <div className="flex text-gray-400 items-center justify-center gap-4 text-lg">
                {fullUserDetails?.fbLinks && (
                  <a
                    className="hover:text[#ffc306]"
                    target="_blank"
                    rel="noreferrer"
                    href={fullUserDetails?.fbLinks}
                  >
                    <FaFacebook />
                  </a>
                )}
                {fullUserDetails?.github && (
                  <a
                    className="hover:text[#ffc306]"
                    target="_blank"
                    rel="noreferrer"
                    href={fullUserDetails?.github}
                  >
                    <FaGithub />
                  </a>
                )}
                {fullUserDetails?.LinkLinks && (
                  <a
                    className="hover:text[#ffc306]"
                    target="_blank"
                    rel="noreferrer"
                    href={fullUserDetails?.LinkLinks}
                  >
                    <FaLinkedin />
                  </a>
                )}
                {fullUserDetails?.webSiteLink && (
                  <a
                    className="hover:text[#ffc306]"
                    target="_blank"
                    rel="noreferrer"
                    href={fullUserDetails?.webSiteLink}
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            )
          }
          {
         userEmail !== flexUserEmail && (<div>
  <Link to={'/challenge'} state={{username: mainUserName}}>
  <button className="flexcode-button w-5/6 ml-7 mx-auto py-1 text-sm">Challenge</button>
  </Link>
</div>    )
          }

        </div>

        {/* User Info */}

        <div className="mt-4 mb-4 h-px w-full border-b border-[#0fcda189] border-divider-3"></div>
        <div className="text-base text-white font-medium leading-6">Info</div>
        <div className="my-4 flex flex-col space-y-4">
          {/* User name */}
          <div className="flex items-center space-x-2 text-[14px]">
            <div className="text-[18px]">
              <FaUser className="text-[#0fcda199]" />
            </div>
            <div className="text-white">{fullUserDetails?.username}</div>
          </div>
          {/* Address */}
          {fullUserDetails?.address && (
            <div className="flex items-center space-x-2 text-[14px]">
              <div className="text-[18px]">
                <FaHome className="text-[#0fcda199]" />
              </div>

              <div className="text-white">{fullUserDetails?.address}</div>
            </div>
          )}
          {/* DOB */}
          {fullUserDetails?.dateOfBirth && (
            <div className="flex items-center space-x-2 text-[14px]">
              <div className="text-[18px]">
                <FaBirthdayCake className="text-[#0fcda199]" />
              </div>
              <div className="text-white">{formattedDate || "N/A"}</div>
            </div>
          )}
          {/* Gender */}
          {fullUserDetails?.gender && (
            <div className="flex items-center capitalize space-x-2 text-[14px]">
              <div className="text-[18px]">
                {fullUserDetails?.gender === "male" && (
                  <GiNurseFemale className="text-[#0fcda199]" />
                )}
                {fullUserDetails?.gender === "female" && (
                  <GiFemaleVampire className="text-pink-500" />
                )}
                {fullUserDetails?.gender !== "male" &&
                  fullUserDetails?.gender !== "female" && (
                    <FaUser className="text-slate-500" />
                  )}
              </div>
              <div className="text-white">
                {fullUserDetails?.gender || "N/A"}
              </div>
            </div>
          )}
        </div>
        <div className="text-base text-white font-medium leading-6">
          Statistic
        </div>
        <div className="mt-4 flex flex-col space-y-4">
          {/* Ranks */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2 text-[14px]">
              <div className="text-[18px]">
                <GiRank3 className="text-[#0fcda199]" />
              </div>
              <div className="text-slate-300 ">Rank</div>
              <div className="text-white">{myRank?.rank || 0}</div>
            </div>
          </div>
          {/* Solutions */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2 text-[14px]">
              <div className="text-[18px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="text-blue-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.442 3.433C2 4.152 2 5.136 2 7.1v9.8c0 1.964 0 2.946.442 3.668a3 3 0 00.99.99C4.155 22 5.136 22 7.1 22h9.8c1.964 0 2.946 0 3.668-.442.403-.247.743-.587.99-.99C22 19.845 22 18.863 22 16.9V7.1c0-1.964 0-2.946-.442-3.667a3 3 0 00-.99-.99C19.845 2 18.863 2 16.9 2H7.1c-1.964 0-2.946 0-3.667.442a3 3 0 00-.99.99zm6.534 7.823l1.805 1.805 4.243-4.243a1 1 0 011.414 1.414l-4.95 4.95a1 1 0 01-1.414 0L7.562 12.67a1 1 0 111.414-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text-slate-300 ">Solution</div>
              <div className="text-white">{mySolvedProblems.length || 0}</div>
            </div>
            <div className="ml-7 space-x-1 text-xs text-slate-400">
              <span>Last week</span>
              <span>
                <span className="text-slate-200">
                  {lastWeekSolvedProblems.length || 0}
                </span>
              </span>
            </div>
          </div>
          {/* Points */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2 text-[14px]">
              <div className="text-[18px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="text-[#0fcda1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 12.553A3.746 3.746 0 0112.531 9l.22-.001a3.75 3.75 0 013.412 5.304l.33 1.727a.395.395 0 01-.462.462l-1.727-.331A3.75 3.75 0 019 12.749v-.197z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M1.5 8.251a6.75 6.75 0 013.73-6.036A6.657 6.657 0 018.249 1.5h.401a.75.75 0 01.042.001c2.95.164 5.403 2.265 6.112 5.065.101.402 0 .895-.543.911-.543.016-1.51.023-1.51.023a5.25 5.25 0 00-5.25 5.25s-.048 1.248-.024 1.5c.024.25-.513.64-.914.537a6.653 6.653 0 01-1.33-.502.05.05 0 00-.032-.004l-2.601.498a.75.75 0 01-.878-.877l.498-2.603a.05.05 0 00-.004-.032A6.655 6.655 0 011.5 8.251z"></path>
                </svg>
              </div>
              <div className="text-slate-300 ">Points</div>
              <div className="text-white">
                {mySolvedProblems.reduce(
                  (total, problem) => total + problem.points,
                  0
                ) || 0}
              </div>
            </div>
            <div className="ml-7 space-x-1 text-xs text-slate-400">
              <span>Last week</span>
              <span className="text-slate-400">{lastWeekTotalPoints || 0}</span>
            </div>
          </div>
          {/* Reputation */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2 text-[14px]">
              <div className="text-[18px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="text-orange-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text-slate-300 ">Reputation</div>
              <div className="text-white">0</div>
            </div>
            <div className="ml-7 space-x-1 text-xs text-slate-400">
              <span>Last week</span>
              <span>
                <span className="text-slate-400">0</span>
              </span>
            </div>
          </div>
        </div>
        {/* End Community Stats content */}

        <div className="mt-4 mb-4 h-px w-full border-b border-divider-3"></div>
        <div className="text-base text-white font-medium leading-6">
          Languages
        </div>
        <div className="mt-3 space-y-2 text-xs text-slate-300">
          {problemsByLanguage ? (
            Object.keys(problemsByLanguage).map((language, index) => (
              <div className="flex justify-between items-center" key={index}>
                <span className="py-1 px-3 bg-slate-700 rounded-md cursor-pointer">
                  {language}
                </span>
                <p>
                  <span className="font-semibold primary-color">
                    {problemsByLanguage[language]}
                  </span>{" "}
                  Problems solved
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">Not enough data</p>
          )}
        </div>
        {/* Start Skills content */}
        <div className="mt-5 w-full">
          <div className="text-base text-white font-medium leading-6">
            Skills
          </div>
          <div className="my-3 flex items-center flex-wrap gap-1">
            {fullUserDetails?.skills?.map((skill, index) => (
              <span key={index} className="py-1 px-3 bg-slate-700 text-slate-300 text-xs rounded-md cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* End Skills content */}
      </div>
    </section>
  );
};

export default DbUserSideBar;
