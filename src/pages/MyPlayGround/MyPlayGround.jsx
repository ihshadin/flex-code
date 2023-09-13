import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import { SiAirplayaudio } from "react-icons/si";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useFlexUser from "../../Hooks/useFlexUser";

const MyPlayGround = () => {
  const [axiosSecure] = useAxiosSecure();
  const [flexUser] = useFlexUser();
  const [projectsCode, setProjectsCode] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/playground?username=${flexUser?.username}`)
      .then((data) => {
        setProjectsCode(data?.data);
        setIsLoading(false)
      });
  }, [flexUser]);


  return (
    <div className="flexcode-container !pt-16 md:!pt-10">
      <PageBannerTitle
        title="My PlayGround"
        shortDesc="Flex Your Knowledge In this PlayGround And Proved Yourself"
        btnLink={"/playground"}
        btnText1="Click For Play"
        btnText2="Play With HTML, Css & js"
        btnIcon={<SiAirplayaudio className="w-12 h-14 text-[#0fcda1]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {
          isLoading || projectsCode?.length === 0 ? (
            <>
              <div className="p-5 rounded-xl border-gray-500 exploreCard">
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-3 w-[40%] rounded"></div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-slate-500 animate-pulse bg-opacity-50 h-3 w-[30%] rounded"></div>
                  <div className="bg-slate-500 animate-pulse bg-opacity-50 h-5 w-[50%] rounded"></div>
                </div>
              </div>
              <div className="hidden md:block p-5 rounded-xl border-gray-500 exploreCard">
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-3 w-[40%] rounded"></div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-slate-500 animate-pulse bg-opacity-50 h-3 w-[30%] rounded"></div>
                  <div className="bg-slate-500 animate-pulse bg-opacity-50 h-5 w-[50%] rounded"></div>
                </div>
              </div>
              <div className="hidden lg:block p-5 rounded-xl border-gray-500 exploreCard">
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-3 w-[40%] rounded"></div>
                <div className="flex gap-3 items-center mt-5">
                  <div className="bg-slate-500 animate-pulse bg-opacity-50 h-3 w-[30%] rounded"></div>
                  <div className="bg-slate-500 animate-pulse bg-opacity-50 h-5 w-[50%] rounded"></div>
                </div>
              </div>
            </>
          ) : (
            projectsCode?.map((projectCode) => (
              <Link key={projectCode?._id} to={`/pre-project/${projectCode?._id}`}>
                <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-slate-500 hover:border-[#0fcda156] transition-all exploreCard drop-shadow-md cursor-pointer">
                  <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]">
                    Click For Preview
                  </p>
                  <div className="flex gap-5">
                    <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
                      Project Name:
                    </p>
                    <h1 className="text-[1.2rem] text-white capitalize font-semibold tracking-wider">
                      {projectCode?.projectName}
                    </h1>
                  </div>
                </div>
              </Link>
            ))
          )
        }
      </div>
    </div>
  );
};

export default MyPlayGround;
