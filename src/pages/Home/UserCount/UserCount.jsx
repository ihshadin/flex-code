import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const UserCount = () => {
  const [users, setUsers] = useState([]);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student/all")
      .then((data) => setUsers(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/problem")
      .then((data) => setProblems(data.data));
  }, []);

  return (
    <section>
      <div className="flexcode-container">
        <div className="rounded-xl py-16 px-5 md:px-0 text-center border-gray-500 transition-all duration-300 hover:border-[#0fcda156] border-2 drop-shadow-lg grid gap-8 md:gap-0 md:grid-cols-3 justify-center text-white divide-y-2 md:divide-y-0 divide-x-0 md:divide-x-2 hover:divide-[#0fcda156] divide-gray-500 group">
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
            <h2 className="text-5xl md:text-7xl font-bold">
              <CountUp start={0} end={users?.length} duration={4} />
              <span className="group-hover:text-[#0fcda1] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider font-thin">
              Total users in FlexCode.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
            <h2 className="text-5xl md:text-7xl font-bold">
              <CountUp start={0} end={problems?.length} duration={3} />
              <span className="group-hover:text-[#0fcda1] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">
              Total problems in our site.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
            <h2 className="text-5xl md:text-7xl font-bold">
              <CountUp start={0} end={451} duration={3} />
              <span className="group-hover:text-[#0fcda1] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">
              Completed Problems in this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserCount;
