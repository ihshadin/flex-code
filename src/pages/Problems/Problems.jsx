import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import AddProblemCTA from "./AddProblemSolving/AddProblemCTA";
import axios from "axios";

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [filterLevel, setFilterLevel] = useState("");
  const [searchText, setSearchText] = useState ("")

  const problemCard = [
    {
      language: "javaScript",
      problems: [
        {
          title: "FizzBuzz",
          level: "easy",
          answer: "",
        },
        {
          title: "Reverse a String",
          level: "easy",
          answer: "",
        },
        {
          title: "Two sum",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Python",
      problems: [
        {
          title: "Palindrome Check",
          level: "easy",
          answer: "",
        },
        {
          title: "Factorial",
          level: "easy",
          answer: "",
        },
        {
          title: "Fibonacci Series",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Java",
      problems: [
        {
          title: "String Reversal",
          level: "easy",
          answer: "",
        },
        {
          title: "Prime Number Check",
          level: "easy",
          answer: "",
        },
        {
          title: "Array Sum",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "C++",
      problems: [
        {
          title: "Factorial",
          level: "easy",
          answer: "",
        },
        {
          title: "GCD and LCM",
          level: "easy",
          answer: "",
        },
        {
          title: "Array Average",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Ruby",
      problems: [
        {
          title: "Palindrome Check",
          level: "easy",
          answer: "",
        },
        {
          title: "FizzBuzz",
          level: "easy",
          answer: "",
        },
        {
          title: "Prime Number Check",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Swift",
      problems: [
        {
          title: "Fibonacci Series",
          level: "easy",
          answer: "",
        },
        {
          title: "Reverse a String",
          level: "easy",
          answer: "",
        },
        {
          title: "Array Sum",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "PHP",
      problems: [
        {
          title: "String Reversal",
          level: "easy",
          answer: "",
        },
        {
          title: "GCD and LCM",
          level: "easy",
          answer: "",
        },
        {
          title: "Palindrome Check",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Kotlin",
      problems: [
        {
          title: "Array Average",
          level: "easy",
          answer: "",
        },
        {
          title: "FizzBuzz",
          level: "easy",
          answer: "",
        },
        {
          title: "Factorial",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "C#",
      problems: [
        {
          title: "Prime Number Check",
          level: "easy",
          answer: "",
        },
        {
          title: "Reverse a String",
          level: "easy",
          answer: "",
        },
        {
          title: "GCD and LCM",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Go",
      problems: [
        {
          title: "Two sum",
          level: "easy",
          answer: "",
        },
        {
          title: "Palindrome Check",
          level: "easy",
          answer: "",
        },
        {
          title: "Fibonacci Series",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "Rust",
      problems: [
        {
          title: "Array Sum",
          level: "easy",
          answer: "",
        },
        {
          title: "Reverse a String",
          level: "easy",
          answer: "",
        },
        {
          title: "Prime Number Check",
          level: "easy",
          answer: "",
        },
      ],
    },
    {
      language: "TypeScript",
      problems: [
        {
          title: "Array Average",
          level: "easy",
          answer: "",
        },
        {
          title: "Palindrome Check",
          level: "easy",
          answer: "",
        },
        {
          title: "Two sum",
          level: "easy",
          answer: "",
        },
      ],
    },
    // Add more objects like this if needed
  ];
  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/problem?search=${searchText}&level=${filterLevel}`)
      .then((data) => {
        console.log(data)
        setProblems(data.data);
      });
  }, [filterLevel , searchText]);


  return (
    <section>
      <div className="flexcode-container ">
        <AddProblemCTA />
        <div className="mt-10 mb-10">
          <h1 className="text-3xl text-white font-semibold">
            Most Popular languages
          </h1>
          <p className="text-md text-white mt-1 tracking-wider">
            A collection of most popular problems.
          </p>
        </div>
        <div className="grid grid-cols-3 mb-24 mt-16 justify-center rounded-lg ">
          {problemCard?.map((problem, index) => (
            <Link
              to={`${problem?.language}`}
              key={index}
              className={`${problemCard.reduce((total, i) => total + index, 0) - 3 <= index
                  ? "border-b"
                  : ""
                } ${[9, 10, 11].includes(index) ? "" : "border-b"} ${[1, 4, 7, 10, 13].includes(index) ? "border-x" : ""
                } cursor-pointer border-[#0fcda1] hover:bg-[#0fcda1] hover:text-[#17181b] transition-all flex justify-center items-center`}
            >
              <p className="md:text-lg font-medium text-center py-5">
                {problem.language}
              </p>
            </Link>
          ))}
        </div>
        <div className="mb-10">
          <h1 className="text-3xl font-semibold">See What's new for you</h1>
          <p className="text-md mt-1">Our weekly and monthly best problems.</p>
        </div>

        {/* Program filtering and search design*/}
        <div className="flex gap-5 ">
          {/* Search option */}
          <fieldset className="w-full  dark:text-gray-100">
            <label for="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none border-none "
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-100 cursor-pointer"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                onChange={(e)=> setSearchText(e.target.value)}
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full md:w-[400px] py-3 pl-10 pr-5 text-sm rounded-md border border-white focus:outline-none bg-[#17181b]  "
              />
            </div>
          </fieldset>

          {/* Search option */}

          {/* Program filtering design*/}
          <select
            className="block ml-auto mb-10 py-3 px-1 text-white bg-[#17181b] border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
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

        <div className="grid md:grid-cols-2 gap-6">
          {problems?.map((problem, index) => (
            <div
              key={index}
              className="exploreCard flex flex-col md:flex-row items-center justify-between border px-5 py-6 rounded-xl"
            >
              <div>
                <h1 className="text-base mb-5 text-white font-semibold">
                  {problem.title}
                </h1>
                <div className="flex items-center gap-5">
                  <p className="text-xs text-gray-400 tracking-wider">
                    {" "}
                    Type:{" "}
                    <span
                      className={`capitalize ${problem.level === "easy"
                          ? "text-green-500"
                          : problem.level === "difficult"
                            ? "text-red-500"
                            : "text-yellow-500"
                        }`}
                    >
                      {problem.level}
                    </span>
                    .
                  </p>
                  <p className="text-xs text-gray-400 tracking-wider">
                    {" "}
                    Language: <span className="text-white">{problem.language}</span>.
                  </p>
                 
                </div>
              </div>
              <div className="">
                <Link
                  to={`/problem/${problem.id}`}
                  className="flexcode-button text-xs py-2 px-3"
                >
                  Solve Problem
                </Link>
              </div>
            </div>
          ))}
          <div className="border hover:border-[#0fcda1] rounded-lg montserrat flex justify-between px-5 items-center">
            <div className="flex flex-col gap-3 p-5">
              <p className="text-md font-semibold text-white mt-1 tracking-wider">
                {" "}
                Problem of the month.
              </p>
              <span className="flex items-center gap-5">
                <p className="text-xs text-gray-400 tracking-wider">
                  {" "}
                  Challenges: <span className="text-white">2000</span>.
                </p>
                <p className="text-xs text-gray-400 tracking-wider">
                  {" "}
                  Attempts: <span className="text-white">4000</span>.
                </p>
              </span>
              <h1 className="text-3xl mt-2 tracking-wide text-white font-bold">
                {" "}
                Two sum
              </h1>
              <span className="flex items-center gap-5">
                <p className="text-xs text-gray-400 tracking-wider">
                  {" "}
                  Level: <span className="text-white">Easy</span>.
                </p>
                <p className="text-xs mt-1 text-gray-400 tracking-wider">
                  {" "}
                  Language: <span className="text-white">JavaScript</span>.
                </p>
              </span>
            </div>
            <div>
              <button className="flexcode-button py-3 px-4">
                Solve Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Problems;
