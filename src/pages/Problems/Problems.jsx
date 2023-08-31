import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddProblemCTA from "./AddProblemSolving/AddProblemCTA";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import SpeLangButton from "./SpeLangButton";
import pythonLogo from '../../assets/language/pythonLogo.svg'

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [filterLevel, setFilterLevel] = useState("");
  const [searchText, setSearchText] = useState("")
  const [axiosNormal] = useAxiosNormal();
  const [speLangProblems, setSpeLangProblems] = useState([]);

  const problemsLanguage = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Swift', 'PHP', 'Go', 'TypeScript']

  // useEffect(() => {
  //   axiosNormal.get(`/problem`)
  //     .then((data) => {
  //       setSpeLangProblems(data);
  //     });
  // }, []);

  // const problemCard = [
  //   {
  //     language: "javaScript",
  //     problems: [
  //       {
  //         title: "FizzBuzz",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Reverse a String",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Two sum",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Python",
  //     problems: [
  //       {
  //         title: "Palindrome Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Factorial",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Fibonacci Series",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Java",
  //     problems: [
  //       {
  //         title: "String Reversal",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Prime Number Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Array Sum",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "C++",
  //     problems: [
  //       {
  //         title: "Factorial",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "GCD and LCM",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Array Average",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Ruby",
  //     problems: [
  //       {
  //         title: "Palindrome Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "FizzBuzz",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Prime Number Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Swift",
  //     problems: [
  //       {
  //         title: "Fibonacci Series",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Reverse a String",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Array Sum",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "PHP",
  //     problems: [
  //       {
  //         title: "String Reversal",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "GCD and LCM",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Palindrome Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Kotlin",
  //     problems: [
  //       {
  //         title: "Array Average",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "FizzBuzz",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Factorial",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "C#",
  //     problems: [
  //       {
  //         title: "Prime Number Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Reverse a String",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "GCD and LCM",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Go",
  //     problems: [
  //       {
  //         title: "Two sum",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Palindrome Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Fibonacci Series",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "Rust",
  //     problems: [
  //       {
  //         title: "Array Sum",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Reverse a String",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Prime Number Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   {
  //     language: "TypeScript",
  //     problems: [
  //       {
  //         title: "Array Average",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Palindrome Check",
  //         level: "easy",
  //         answer: "",
  //       },
  //       {
  //         title: "Two sum",
  //         level: "easy",
  //         answer: "",
  //       },
  //     ],
  //   },
  //   // Add more objects like this if needed
  // ];

  useEffect(() => {
    axiosNormal.get(`/problem?search=${searchText}&level=${filterLevel}`)
      .then((data) => {
        setProblems(data);
      });
  }, [filterLevel, searchText]);

  return (
    <section>
      <div className="flexcode-container ">
        <PageBannerTitle
          title="Most Popular languages"
          shortDesc="A collection of most popular problems."

        />
        {/* <div className="flex gap-x-28 gap-y-10 flex-wrap px-16 py-5">
          <SpeLangButton
            language="javascript"
            link="/problems/javascript"
            icon='https://i.ibb.co/hfwxPBy/python-Logo.png'
            bgColor={'#0fcda1'}
          />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
          <SpeLangButton />
        </div> */}

        <div className="grid grid-cols-3 mb-24 mt-16 justify-center rounded-lg ">
          {problemsLanguage?.map((problem, index) => (
            <Link
              to={`${problem.toLowerCase()}`}
              key={index}
              className={`${problemsLanguage.reduce((total, i) => total + index, 0) - 3 <= index
                ? "border-b"
                : ""
                } ${[6, 7, 8].includes(index) ? "" : "border-b"} ${[1, 4, 7, 10, 13].includes(index) ? "border-x" : ""
                } cursor-pointer border-[#0fcda1] hover:bg-[#0fcda1] hover:text-[#17181b] transition-all flex justify-center items-center`}
            >
              <p className="md:text-lg font-medium text-center py-5">
                {problem}
              </p>
            </Link>
          ))}
        </div>

        {/* <div className="grid grid-cols-3 pt-20">
          <div>
            <div className='relative w-16 h-16 group transition-all duration-300 rotate-[-10deg] skew-x-[25deg]'>
              <Link className='[&>*]:absolute [&>*]:top-0 [&>*]:left-0 [&>*]:w-44 [&>*]:h-16 [&>*]:duration-300 [&>*]:bg-[#0fcda1] [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:pr-2'>
                <span className='group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-20'></span>
                <span className='group-hover:translate-y-[-10px] group-hover:translate-x-[10px] group-hover:opacity-40'></span>
                <span className='group-hover:translate-y-[-20px] group-hover:translate-x-[20px] group-hover:opacity-60'></span>
                <span className='group-hover:translate-y-[-30px] group-hover:translate-x-[30px] group-hover:opacity-80'></span>
                <span className='group-hover:translate-y-[-40px] group-hover:translate-x-[40px] group-hover:opacity-100'>
                  <svg className='w-16' viewBox="0 0 1052 1052">
                    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                    <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" />
                  </svg>
                  <span className="text-xl font-semibold">JavaScipt</span>
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className='relative w-16 h-16 group transition-all duration-300'>
              <Link className='[&>*]:absolute [&>*]:top-0 [&>*]:left-0 [&>*]:w-44 [&>*]:h-16 [&>*]:duration-300 [&>*]:bg-[#0fcda1] [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:pr-2'>
                <span className='group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-20'></span>
                <span className='group-hover:translate-y-[-10px] group-hover:translate-x-[10px] group-hover:opacity-40'></span>
                <span className='group-hover:translate-y-[-20px] group-hover:translate-x-[20px] group-hover:opacity-60'></span>
                <span className='group-hover:translate-y-[-30px] group-hover:translate-x-[30px] group-hover:opacity-80'></span>
                <span className='group-hover:translate-y-[-40px] group-hover:translate-x-[40px] group-hover:opacity-100'>
                  <svg className="w-16 h-16" viewBox="0 0 256 255" version="1.1">
                    <defs>
                      <linearGradient x1="12.9593594%" y1="12.0393928%" x2="79.6388325%" y2="78.2008538%" id="linearGradient-1">
                        <stop stop-color="#387EB8" offset="0%"></stop>
                        <stop stop-color="#366994" offset="100%"></stop>
                      </linearGradient>
                      <linearGradient x1="19.127525%" y1="20.5791813%" x2="90.7415328%" y2="88.4290372%" id="linearGradient-2">
                        <stop stop-color="#FFE052" offset="0%"></stop>
                        <stop stop-color="#FFC331" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <path d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="url(#linearGradient-1)"></path>
                      <path d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="url(#linearGradient-2)"></path>
                    </g>
                  </svg>
                  <span className="text-xl text-center font-semibold">Python</span>
                </span>
              </Link>
            </div>
          </div>
        </div> */}

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
