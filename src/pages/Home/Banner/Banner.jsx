import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute w-full h-full bg-gradient-to-t from-[#05040b] to-[#17181b]">
        <img
          src="https://i.ibb.co/jRR95d6/Coding-1png.png"
          className="absolute w-full h-full object-cover opacity-10"
          alt=""
        />
      </div>
      <div className="flexcode-container w-full md:h-[650px] pt-16 flex flex-col-reverse md:flex-row items-center overflow-hidden">
        <div className="hidden sm:block relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://i.ibb.co/zRnPHLP/BG.png"
            alt=""
            className="relative sm:w-40 md:w-96 xl:w-[600px]"
          />
        </div>
        <div className="relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
          {/* ::Small Title */}
          <h2 className="text-3xl sm:text-6xl font-semibold ">
            Feel like <span className="text-[#08ecb8] font-semibold">coding</span> in your{" "}
          </h2>
          <h1 className="text-3xl sm:text-6xl font-semibold ">own environment</h1>
          <div className="mt-10">
            <a
              class="group relative inline-block focus:outline-none focus:ring"
              href="#"
            >
              <button class="absolute inset-0 translate-x-0 hover:translate-y-0 rounded-md shadow-2xl bg-[#0fcda133] focus:bg-transparent transition-transform group-hover:translate-y-2 group-hover:translate-x-2"></button>
              <button class="relative inline-block shadow-2xl border-2 rounded-md border-[#0fcda1] focus:border-white px-8 py-3 text-base font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                Get Start Now
              </button>

            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
