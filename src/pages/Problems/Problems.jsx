import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import useScrollTop from "../../hooks/useScrollTop";
import AddProblemCTA from "./AddProblemSolving/AddProblemCTA";
import axios from "axios";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [filterLevel, setFilterLevel] = useState("");
  const [searchText, setSearchText] = useState("")

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
        setProblems(data.data);
      });
  }, [filterLevel, searchText]);


  return (
    <section>
      <div className="flexcode-container ">
        <PageBannerTitle
          title="Most Popular languages"
          shortDesc="A collection of most popular problems."
        />
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

        <PageBannerTitle
          title="Recent problems"
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

        <div className="grid md:grid-cols-2 gap-6">
          {problems?.map((problem, index) => (
            <div
              key={index}
              className="flexcode-banner-bg flex flex-col md:flex-row items-center justify-between border border-slate-500 hover:border-[#0fcda18c] px-5 py-6 rounded-xl"
            >
              <div>
                <h1 className="text-base mb-5 text-white font-semibold">
                  {problem.title}
                </h1>
                <div className="flex items-center gap-5">
                  <p className="text-xs text-gray-400 tracking-wider">
                    Type:
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
                  to={`/problem/${problem._id}`}
                  className="flexcode-button text-xs py-2 px-3"
                >
                  Solve Problem
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Problems;
