import React from 'react';
import { Link } from "react-router-dom";

const ChallengeCard = ({challengeName, sender, receiver, time, id, winner, winnerTime}) => {
    // console.log(challengeName, sender, time);
return (
    <div className="flexcode-banner-bg flex flex-col md:flex-row md:items-center justify-between border border-slate-500 hover:border-[#0fcda18c] px-5 py-6 rounded-xl">
    <div>
      <span className="flex items-center mb-2 md:mb-5 gap-2">
        <h1 className="text-base text-white font-semibold">
          {challengeName}
        </h1>{" "}
      </span>
      <div className="flex items-center gap-5">
        <p className="text-sm text-gray-400 tracking-wider">
          Challenger:{" "}
          <span
            className={`capitalize text-yellow-400`}
          >
            {sender}
          </span>
        </p>
        <p className="text-sm text-gray-400 tracking-wider">
          Time: <span className="text-white">{!winnerTime ? time : winnerTime} seconds</span>.
        </p>
      </div>
    </div>
    {sender === winner ? (
  <p>You Lose</p>
) : receiver === winner ? (
  <p>You Won</p>
) : (
  <Link
    to={`/challenge/${id}`}
    state={{ username: sender, timeStamp: time, id: id }}
    className="flexcode-button text-xs py-2 px-3"
  >
    Accept
  </Link>
)}
  </div>
);
};
export default ChallengeCard;