import React from 'react';
import { Link, useNavigation } from "react-router-dom";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Pagination from "../../components/Pagination/Pagination";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import CardLoading from "../../components/FlexcodeLoading/CardLoading";
import ProblemCard from "./ProblemCard";
import useAllProblems from "../../Hooks/useAllProblems";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Problems = () => {
  const {
    allProblems,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading,
    setSearchText,
    filterLevel,
    setFilterLevel,
  } = useAllProblems();

  const problemsLanguage = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "PHP",
    "Go",
    "TypeScript",
  ];

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  return (
    <section>
      <Helmet title="Flex Code | Problems"/>
      <motion.div
        key="flex_ftr474kdho4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="flexcode-container !pt-16 md:!pt-10"
      >
        <PageBannerTitle
          title="Most Popular languages"
          shortDesc="A collection of most popular problems."
        />

        {/* Filter language */}
        <div className="grid grid-cols-3 mb-24 mt-16 justify-center rounded-lg ">
          {problemsLanguage?.map((problem, index) => (
            <Link
              to={`${problem.toLowerCase()}`}
              key={index}
              className={`${
                problemsLanguage.reduce((total) => total + index, 0) - 3 <=
                index
                  ? "border-b"
                  : ""
              } ${[6, 7, 8].includes(index) ? "" : "border-b"} ${
                [1, 4, 7, 10, 13].includes(index) ? "border-x" : ""
              } cursor-pointer border-[#0fcda1] hover:bg-[#0fcda1] hover:text-[#17181b] transition-all flex justify-center items-center`}
            >
              <p className="md:text-lg font-medium text-center py-5">
                {problem}
              </p>
            </Link>
          ))}
        </div>

        <PageBannerTitle
          title="All problems"
          shortDesc="See What's new for you"
        />

        {/* Program filtering and search design*/}
        <div className="flex gap-5 mt-10 mb-5">
          {/* Search option */}
          <div className="relative w-1/2 md:w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none border-none"
              >
                <svg
                  fill="rgb(100 116 139)"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 cursor-pointer"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 md:py-3 pl-10 pr-5 text-sm rounded-lg border border-slate-500 hover:border-slate-400 focus:outline-none bg-transparent"
            />
          </div>
          {/* Search option */}

          {/* Program filtering design*/}
          <select
            className="block w-1/2 md:w-96 ml-auto py-2 md:py-3 px-5 text-white bg-[#17181b] border border-slate-500 hover:border-slate-400 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="levelSelect"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">Filter Problem</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
          {/* Program filtering design*/}
        </div>
        {/* Program filtering and search design*/}

        {isLoading ? (
          <CardLoading />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {allProblems?.map((problem) => (
              <ProblemCard key={problem._id} problem={problem} />
            ))}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPage={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </motion.div>
    </section>
  );
};
export default Problems;
