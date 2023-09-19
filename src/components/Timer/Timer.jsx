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
      
      
  return (
    <div className="flex items-center gap-2 mr-3">
      <button className="font-semibold text-xl flex items-center">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</button>

      {!isRunning && (
        <button className="py-1 px-1 font-semibold text-lg flex items-center" onClick={handleStart}><FaPlay className="text-[#0fcda1]"/></button>
      )}
    </div>
  );
}

export default Timer;