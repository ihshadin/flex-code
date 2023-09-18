import React from "react";
import { FaFrown, FaGrinAlt, FaHandPaper, FaTrashAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChallengeCard = ({ challenges, HandleDeleteChallenge, fromSender }) => {

  const {
  problem,
  sender,
  receiver,
  timeStamp,
  _id,
  id,
  winner,
  winnerTime,
  senderImg,
  senderName
  } = challenges;
  // console.log(challengeName, sender, time);
  return (
    <div className="border border-slate-500 hover:border-[#0fcda18c] px-5 pb-4 pt-2 rounded-xl exploreCard">
        <p className="text-md font-semibold text-white mt-2 mb-1 tracking-wider">Challenger:</p>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 p-1 border border-[#0fcda1] rounded">
                {senderImg ? (
                  <img src={senderImg} alt="img" className=" rounded " />
                ) : (
                  <FaUser className="h-14 w-14 p-1" />
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-semibold">{senderName}</p>
                <p className="text-xs text-gray-400">{sender}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="flex items-center mb-2 md:mb-2 gap-2">
            <h1 className="text-base text-white">
              {problem}
            </h1>
          </span>
          <p className="text-sm text-gray-400 tracking-wider mt-2">
            Time:{" "}
            <span className="text-white">
              {!winnerTime ? timeStamp : winnerTime} seconds
            </span>
            .
          </p>
        </div>
        <div className="relative">
        { winner &&   <FaTrashAlt title="delete" onClick={() =>HandleDeleteChallenge(_id, 'receiver')} className="absolute -top-8 -right-2 text-gray-500 cursor-pointer"/>}
        { fromSender &&   <FaTrashAlt title="delete" onClick={() =>HandleDeleteChallenge(_id, 'sender')} className="absolute -top-8 -right-2 text-gray-500 cursor-pointer"/>}
          {sender === winner ? (
            <div>
              <FaFrown className="w-8 h-8 mx-auto text-[#cd0f0fd4] mb-1"/>
              <p className="text-red-500">You Lose</p>
            </div>
          ) : receiver === winner ? (
            <div>
              <FaGrinAlt className="w-8 h-8 mx-auto text-amber-400 mb-1"/>
              <p className="text-amber-400">You Won</p>
            </div>
          ) : (!winner && fromSender) ? (
            <div>
              <FaHandPaper className="w-8 h-8 mx-auto text-amber-400 mb-1"/>
              <p className="text-amber-400 text-center">Not Accepted Yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button onClick={() =>HandleDeleteChallenge(_id, 'receiver')} className="flexcode-button !border-red-500 after:bg-[#cd0f0f5a] text-xs py-1 px-3">
                Reject
              </button>
              <Link
                to={`/challenge/${id}`}
                state={{ username: sender, timeStamp: timeStamp, id: id, ownId: _id }}
                className="flexcode-button text-xs py-1 text-center"
              >
                Accept
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ChallengeCard;
