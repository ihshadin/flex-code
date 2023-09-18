
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import useAllProblems from "../../../Hooks/useAllProblems";
import useAllBlogs from "../../../Hooks/useAllBlogs";
import { useEffect, useState } from "react";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const { problemLength } = useAllProblems();
  const { blogsLength } = useAllBlogs();
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/users/count").then((data) => {
      setUserCount(data);
    });
  }, []);
  const props = {
    colorSlice: "#00000000",
    size: 150,
    fontSize: "4rem",
    fontWeight: 700,
    fontColor: '#ffffff',
    textPosition: "23px",
    unit: "",
    speed: 40
  }
  return (
    <section>
      <div className="flexcode-container">
        <div className="rounded-xl py-16 px-5 md:px-0 text-center border-gray-500 transition-all duration-300 hover:border-[#0fcda156] border-2 drop-shadow-lg grid gap-8 md:gap-0 md:grid-cols-3 justify-center text-white divide-y-2 md:divide-y-0 divide-x-0 md:divide-x-2 hover:divide-[#0fcda156] divide-gray-500 group">
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
            <h2 className="text-5xl flex items-center gap-5 md:text-7xl font-bold">
              <CircularProgressBar
                {...props}
                percent={userCount || 0}
              />
              <span className="-ml-8 group-hover:text-[#0fcda1] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider font-thin">
              Total users in FlexCode.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
            <h2 className="text-5xl flex items-center gap-5 md:text-7xl font-bold">
              {/* <CountUp start={0} end={blogsLength || 0} duration={3} /> */}

              <CircularProgressBar
                {...props}
                percent={problemLength || 0}
              />
              <span className="-ml-8 group-hover:text-[#0fcda1] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">
              Total problems in FlexCode.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
            <h2 className="text-5xl flex items-center gap-5 md:text-7xl font-bold">
              {/* <CountUp start={0} end={blogsLength || 0} duration={3} /> */}

              <CircularProgressBar
                {...props}
                percent={blogsLength || 0}
              />
              <span className="-ml-8 group-hover:text-[#0fcda1] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">
              Total blogs in FlexCode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserCount;
