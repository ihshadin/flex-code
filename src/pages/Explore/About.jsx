import React from "react";

const About = () => {
  return (
    <div className="flex flexcode-banner-bg rounded-2xl shadow-2xl p-4 md:p-8 my-5 md:my-10">
      <div className="w-[100%]">
        <h2 className="mb-6 font-bold">
          <span className="border-b-2 border-[#0fcda1] pb-[2px]">FlexCode</span>{" "}
          <span className="text-sm font-normal">
            (unlock the power of problem solving)
          </span>
        </h2>
        <p className="mb-5 text-white tracking-wider md:text-justify">
          FlexCode is a problem-solving platform that helps coding enthusiasts
          improve their skills through engaging challenges and interactive
          learning.FlexCode is designed for all skill levels, including
          beginners. Our platform provides challenges and resources that cater
          to both newcomers and experienced coders.We regularly update FlexCode
          with new challenges to keep the content fresh and engaging. You can
          expect new challenges to be added on a weekly basis, offering you a
          continuous learning experience.FlexCode encourages collaboration among
          users. You can team up with others, tackle challenges together, and
          even join coding communities to learn and grow with fellow
          enthusiasts.
        </p>
        <p className="font-bold">Technologies we've working with :</p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-4">
          <div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-orange-400 mr-2"></span>
              <span>HTML</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
              <span>CSS</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-blue-300 mr-2"></span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-red-400 mr-2"></span>
              <span>Javascript</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-[#0fcda1] mr-2"></span>
              <span>React</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-blue-400 mr-2"></span>
              <span>Daisyui</span>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-orange-600 mr-2"></span>
              <span>Express</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-red-300 mr-2"></span>
              <span>Node.js</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-teal-400 mr-2"></span>
              <span>Mongoose</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
