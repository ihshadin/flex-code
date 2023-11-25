import React from 'react';
import { Link } from 'react-router-dom';
import paper from "/pen-and-paper.svg";

const AddProblemCTA = () => {
    return (
        <div>
        <section className="py-6 bg-[#1e2d40] text-white rounded-md ">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium tracki uppercase dark:text-violet-400">
              Share your knowledge with other
            </p>
            <h1 className="py-2 text-3xl font-semibold leadi title-font">
              Add a problem solving code and share your knowledge
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <Link to='/add-problems'>
              <button className="inline-flex items-center px-5 py-3 rounded-xl bg-primary-color hover:bg-white focus:border focus:border-[#0fcda1] text-black">
                <img className="w-10" src={paper} alt="" />
                <span className="flex flex-col items-start ml-4 leadi">
                  <span className="mb-1 text-xs">add problems solving</span>
                  <span className="font-semibold title-font">Post your code</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    );
};

export default AddProblemCTA;