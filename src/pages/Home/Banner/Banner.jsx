import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full md:h-[650px] pt-16 flex flex-col-reverse md:flex-row items-center overflow-hidden">
        {/* :HERO IMAGE */}
        <div
          className="absolute w-full h-full bg-gradient-to-t from-[#05040b] to-[#17181b]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <img
            src="https://i.ibb.co/jRR95d6/Coding-1png.png"
            alt=""
            className="absolute w-full h-full object-cover opacity-10"
          />
        </div>

        {/* :PRODUCT */}
        <div className="hidden sm:block relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://i.ibb.co/zRnPHLP/BG.png"
            alt=""
            className="relative mx-auto sm:w-40 md:w-96 xl:w-[600px]"
          />
        </div>

        {/* :HERO MAIN */}
        <div className="relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
          {/* ::Small Title */}
          <h2 className="text-3xl sm:text-6xl font-semibold ">
            Feel like <span className="text-[#08ecb8] font-semibold">coding</span> in your{" "}
          </h2>

          {/* ::Big Title */}
          <h1 className="text-3xl sm:text-6xl font-semibold ">own environment</h1>

          {/* ::Text */}
          <div className="mt-10">
            <a
              class="group relative inline-block focus:outline-none focus:ring"
              href="/download"
            >
              <span class="absolute inset-0 translate-x-2 translate-y-2 rounded-md shadow-2xl bg-[#ffffff] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span class="relative inline-block shadow-2xl border-4 rounded-md border-[#08ecb8] px-8 py-3 text-base font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              Get Start Now
              </span>
              
            </a>

          </div>

          {/* ::Download App */}
          <div className="flex-shrink-0 py-5 flex flex-col sm:flex-row items-center">
            {/* Apple Store */}
            <a href="#link" className="py-2 sm:pr-5">
              <img
                src="https://fancytailwind.com/static/badge-apple-store-white-transparent-"
                alt=""
                className="w-40"
              />
            </a>
            {/* Google Store */}
            <a href="#link" className="py-2 sm:pl-5">
              <img
                src="https://fancytailwind.com/static/badge-play-store-white-transparent-"
                alt=""
                className="w-40"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
