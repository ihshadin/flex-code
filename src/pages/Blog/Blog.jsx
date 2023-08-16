import React from "react";
import image1 from "../../../public/image-1.jpg";

const Blog = () => {
  return (
    <section>
      <div className="flexcode-container">
        <div className="max-w-[600px] mx-auto mb-6 md:mb-12">
          <h2 className="text-center font-bold text-2xl md:text-4xl text-white">
            Proactive Problem Solving
          </h2>
          <p className="text-white text-center mt-2 md:mt-4">
            Explore our insightful blog, where we dissect challenges, share
            actionable strategies, and empower you to conquer obstacles with
            confidence.
          </p>
        </div>
        <div className="grid gap-5 md:gap-8">
          <div className="py-4 md:py-5 px-3 md:px-5 rounded-2xl bg-[#1e2d40] flex gap-5 md:gap-10 items-center flex-col md:flex-row">
            <div className="max-w-[350px] md:shrink-0">
              <img className="rounded-2xl w-full" src={image1} alt="" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl md:text-3xl text-white">
                Proactive Problem Solving
              </h2>
              <p className="text-white mt-2 md:mt-3">
                Explore our insightful blog, where we dissect challenges, share
                actionable strategies, and empower you to conquer obstacles with
                confidence. Explore our insightful blog, where we dissect
                challenges, share actionable strategies, and empower you to
                conquer obstacles with confidence.
              </p>
              <button className="bg-primary-color py-2 px-5 text-lg rounded-md font-medium mt-3 md:mt-5">
                View Details
              </button>
            </div>
          </div>
          <div className="py-4 md:py-5 px-3 md:px-5 rounded-2xl bg-[#1e2d40] flex gap-5 md:gap-10 items-center flex-col md:flex-row-reverse">
            <div className="max-w-[350px] md:shrink-0">
              <img className="rounded-2xl w-full" src={image1} alt="" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl md:text-3xl text-white">
                Proactive Problem Solving
              </h2>
              <p className="text-white mt-2 md:mt-3">
                Explore our insightful blog, where we dissect challenges, share
                actionable strategies, and empower you to conquer obstacles with
                confidence. Explore our insightful blog, where we dissect
                challenges, share actionable strategies, and empower you to
                conquer obstacles with confidence.
              </p>
              <button className="bg-primary-color py-2 px-5 text-lg rounded-md font-medium mt-3 md:mt-5">
                View Details
              </button>
            </div>
          </div>
          <div className="py-4 md:py-5 px-3 md:px-5 rounded-2xl bg-[#1e2d40] flex gap-5 md:gap-10 items-center flex-col md:flex-row">
            <div className="max-w-[350px] md:shrink-0">
              <img className="rounded-2xl w-full" src={image1} alt="" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl md:text-3xl text-white">
                Proactive Problem Solving
              </h2>
              <p className="text-white mt-2 md:mt-3">
                Explore our insightful blog, where we dissect challenges, share
                actionable strategies, and empower you to conquer obstacles with
                confidence. Explore our insightful blog, where we dissect
                challenges, share actionable strategies, and empower you to
                conquer obstacles with confidence.
              </p>
              <button className="bg-primary-color py-2 px-5 text-lg rounded-md font-medium mt-3 md:mt-5">
                View Details
              </button>
            </div>
          </div>
          <div className="py-4 md:py-5 px-3 md:px-5 rounded-2xl bg-[#1e2d40] flex gap-5 md:gap-10 items-center flex-col md:flex-row-reverse">
            <div className="max-w-[350px] md:shrink-0">
              <img className="rounded-2xl w-full" src={image1} alt="" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl md:text-3xl text-white">
                Proactive Problem Solving
              </h2>
              <p className="text-white mt-2 md:mt-3">
                Explore our insightful blog, where we dissect challenges, share
                actionable strategies, and empower you to conquer obstacles with
                confidence. Explore our insightful blog, where we dissect
                challenges, share actionable strategies, and empower you to
                conquer obstacles with confidence.
              </p>
              <button className="bg-primary-color py-2 px-5 text-lg rounded-md font-medium mt-3 md:mt-5">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
