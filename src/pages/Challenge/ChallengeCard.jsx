import React from "react";
import {
  FaFrown,
  FaGrinAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ChallengeCard = ({ challenges, HandleDeleteChallenge, fromSender }) => {
  const {
    problem,
    sender,
    receiver,
    receiverImg,
    receiverName,
    timeStamp,
    _id,
    problemId,
    winner,
    winnerTime,
    senderImg,
    senderName,
  } = challenges;

  return (
    <div className="border border-slate-500 hover:border-[#0fcda18c] px-5 pb-4 pt-2 rounded-xl exploreCard">

      <h1 className="text-xl font-bold text-white mt-2 -pb-2"># {problem}</h1>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        {/* <div> */}
        <div className="md:w-[80%]">
          <p className="text-sm text-white tracking-wider mt-1 mb-1">
            {
              fromSender ? "Receiver:" : "Challenger:"
            }
            {/* Challenger: */}
          </p>
          <div className="flex items-center gap-5 md:mb-0 mb-3">
            <div className="flex items-center gap-3 w-full">
              <div className="h-12 w-12 md:h-10 md:w-10 rounded">
                {fromSender ? (
                  <img src={receiverImg} alt="img" className=" rounded h-12 w-12 md:h-10 md:w-10" />
                ) : sender ? (
                  <img src={senderImg} alt="img" className=" rounded h-12 w-12 md:h-10 md:w-10" />
                ) : (
                  <FaUser className="h-10 w-10 p-1" />
                )}
              </div>
              <div className="flex flex-col grow md:mr-5">
                <p className="font-semibold">
                  {fromSender ? receiverName : senderName}
                </p>
                <div className="md:flex justify-between items-center">
                  <p className="text-xs text-gray-400">
                    @{fromSender ? receiver : sender}
                  </p>
                  <p className="text-sm text-gray-400 md:tracking-wider">
                    Time:{" "}
                    <span className="text-white">
                      {!winnerTime ? timeStamp : winnerTime} seconds
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:w-[20%]">
          {sender === winner ? (
            <div>
              <FaFrown className="w-8 h-8 mx-auto text-[#cd0f0fd4] mb-1" />
              <p className="text-red-500 text-center">You Lose</p>
            </div>
          ) : receiver === winner ? (
            <div>
              <FaGrinAlt className="w-8 h-8 mx-auto text-[#0fcda1] mb-1" />
              <p className="text-[#0fcda1] text-center">You Won</p>
            </div>
          ) : !winner && fromSender ? (
            <div>
              <p className="text-amber-400 md:text-center">Pending</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => HandleDeleteChallenge(_id, "receiver")}
                className="flexcode-button !border-red-500 after:bg-[#cd0f0f5a] text-xs py-1 px-3"
              >
                Reject
              </button>
              <Link
                to={`/challenge/${problemId}`}
                state={{
                  username: sender,
                  timeStamp: timeStamp,
                  id: problemId,
                  ownId: _id,
                }}
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
