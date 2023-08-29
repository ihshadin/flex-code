import React from "react";

const SearchProblem = () => {
  return (
    <div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Search your college"
          className="bg-[#0418380c] relative border-[1px] w-full px-5 py-3 rounded-full shadow-sm border-white hover:shadow-md focus:outline-none focus:border-[#FBBD23] "
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute right-0 mt-2 hidden sm:block text-sm font-semibold px-2 text-center cursor-pointer">
          <div className="p-2 px-6 bg-[#FBBD23] rounded-full text-white">
            <BiSearch onClick={handleSearch} size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProblem;
