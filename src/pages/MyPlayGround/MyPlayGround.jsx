import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import { SiAirplayaudio } from "react-icons/si";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useFlexUser from "../../Hooks/useFlexUser";
import { Helmet } from "react-helmet";
import images from "../../assets/playground2.png";
import Swal from "sweetalert2";

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
        setIsLoading(false);
      });
  }, [flexUser]);

  const HandelProjectDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/playground?delete=${id}`);

          if (response.data.success === true) {
            setProjectsCode((prevProjects) =>
              prevProjects.filter((project) => project._id !== id)
            );
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Project has been Delete!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: "flex items-center justify-center",
                content: "bg-white p-4 rounded-lg",
                title: "text-center text-xl font-semibold mb-2",
              },
            });
          } else {
            Swal.fire(
              "Error!",
              "An error occurred while deleting the project.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error!",
            "An error occurred while deleting the project.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="flexcode-container !pt-16 md:!pt-10">
      <Helmet title="Flex-Code || My Play Ground" />
      <PageBannerTitle
        title="My PlayGround"
        shortDesc="Flex Your Knowledge In this PlayGround And Proved Yourself"
        btnLink={"/playground"}
        btnText1="Click For Play"
        btnText2="Play With HTML, Css & js"
        btnIcon={<SiAirplayaudio className="w-12 h-14 text-[#0fcda1]" />}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
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
        </div>
      ) : projectsCode.length === 0 ? (
        <div className="my-10">
          <div className="mb-5">
            <img className="w-56 mx-auto" src={images} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wider">
              You don't have a any project
            </h1>
            <p className="text-sm md:text-base text-slate-200 mb-5 mt-2">
              Your saved projct will apear here and you can access anytime.
            </p>
            <Link to="/playground">
              <button className="inline-flex items-center gap-5 px-5 py-3 group rounded-xl bg-gradient-to-tr from-[#1e2d4056] to-[#0fcda122] border border-gray-500 hover:border-[#0fcda1] focus:border focus:border-[#0fcda1] text-white">
                <SiAirplayaudio className="w-12 h-14 text-[#0fcda1]" />
                <span className="flex flex-col gap-1 items-start">
                  <span className="text-xs text-slate-300">Creact Project</span>
                  <span className="font-semibold title-font">
                    Start Your journy
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          {projectsCode?.map((projectCode) => (
            <div
              key={projectCode?._id}
              className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-slate-500 hover:border-[#0fcda156] transition-all exploreCard drop-shadow-md "
            >
              <Link to={`/pre-project/${projectCode?._id}`}>
                <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1] cursor-pointer">
                  Click For Preview
                </p>
              </Link>
              <div className="flex gap-5">
                <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
                  Project Name:
                </p>
                <h1 className="text-[1.2rem] text-white capitalize font-semibold tracking-wider">
                  {projectCode?.projectName}
                </h1>
              </div>
              <button onClick={() => HandelProjectDelete(projectCode?._id)}>
                <FaTrashAlt fontSize={20} color="#0fcda16" className="block " />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlayGround;
