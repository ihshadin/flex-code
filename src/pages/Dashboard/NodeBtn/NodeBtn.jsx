import React from "react";
import { Link } from "react-router-dom";

const NodeBtn = () => {
  return (
    <div>
      <section className=" text-white rounded-md flex justify-center">
        <span className="bg-[#1e2d40] px-20 py-8 lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <Link to='/addNode'>
              <button className="inline-flex items-center px-3 py-2 rounded-xl bg-primary-color hover:bg-slate-200 focus:border text-black">
                <span className="flex flex-col items-start ml-4 leadi">
                  <span className="mb-1 text-xs">write your node</span>
                  <span className="font-semibold title-font">Save your nodebook</span>
                </span>
              </button>
            </Link>
          </div>
        </span>
      </section>
    </div>
  );
};

export default NodeBtn;
