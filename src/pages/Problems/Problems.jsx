import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import AddProblemCTA from "./AddProblemSolving/AddProblemCTA";

const Problems = () => {
  useScrollTop('changes')

  const [problems, setProblems] = useState([])

  const problemss = [
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
    fetch('/problems.json')
      .then(res => res.json())
      .then(data => {
        setProblems(data);
      })
  }, [])

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
        <div className="grid grid-cols-3 mb-24 mt-16 justify-center rounded-lg w-5/6 mx-auto">
          {problemss?.map((problem, index) => (
            <Link
              to={`${problem?.language}`}
              key={index}
              className={`${problemss.reduce((total, i) => total + index, 0) - 3 <= index
                ? "border-b" : ""
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
          <h1 className="text-3xl font-semibold">
            See What's new for you
          </h1>
          <p className="text-md mt-1">
            Our weekly and monthly best problems.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-6 w-5/6 mx-auto md:w-[70%]">
          {
            problems.map((problem, index) => (
              <div key={index} className="flex flex-col md:flex-row mb-8 justify-between items-center border px-10 py-6 rounded-xl">
                <div>
                  <h1 className="text-3xl mb-5 text-white font-semibold">{problem.title}</h1>
                  <div className="flex items-center gap-5">
                    <p className="text-xs text-gray-400 tracking-wider"> Type: <span className={`capitalize ${problem.level === 'easy' ? 'text-green-500' : problem.level === 'difficult' ? 'text-red-500' : "text-yellow-500"}`}>{problem.level}</span>.</p>
                    <p className="text-xs text-gray-400 tracking-wider"> Attempts: <span className="text-white">4000</span>.</p>
                    <p className="text-xs text-gray-400 tracking-wider"> Success rate: <span className="text-white">53.42%</span>.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to={`/problem/${problem.id}`} className="flexcode-button text-xs py-2 px-4">
                    Solve Problem
                  </Link>
                  <Link to='/feedback' className="flexcode-button text-xs py-2 px-4 text-center">
                    Feedback
                  </Link>
                </div>
              </div>
            ))
          }
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
