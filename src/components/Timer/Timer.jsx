import React, { useState, useEffect } from "react";
import { FaReplyAll } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

function Timer({ setTime, isRunning, setIsRunning}) {
        const [seconds, setSeconds] = useState(0);
        const [minutes, setMinutes] = useState(0);
   
        useEffect(() => {
          let interval = null;
      
          if (isRunning) {
            interval = setInterval(() => {
              if (seconds === 59) {
                setSeconds(0);
                setMinutes(minutes + 1);
              } else {
                setSeconds(seconds + 1);
              }
            }, 1000);
          }
          
          setTime(seconds + (minutes*60))
          return () => clearInterval(interval);
        }, [isRunning, seconds]);
      
        const handleStart = () => {
          setIsRunning(true);
        };
      
      
        const handleRestart = () => {
          setTime(seconds + (minutes*60))
          setIsRunning(false);
          setSeconds(0);
          setMinutes(0);
        };
  return (
    <div className="flex items-center gap-8">
      <button className="md:-mr-5 py-2 min-w-[6.5rem] px-5 border-2 border-[#ffbc2ab5] rounded-lg font-semibold text-xl flex items-center gap-1">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</button>

      {!isRunning && (
        <button className="md:-mr-5 py-3 px-3 border border-[#ffbc2ab5] rounded-full font-semibold text-lg flex items-center gap-1" onClick={handleStart}><FaPlay/></button>
      )}
     {isRunning && (
         <button className="md:-mr-5 py-3 px-3 border border-[#ffbc2ab5] rounded-full font-semibold text-lg flex items-center gap-1" onClick={handleRestart}><FaReplyAll/></button>
     )}
    </div>
  );
}

export default Timer;