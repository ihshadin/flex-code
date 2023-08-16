import { Link } from "react-router-dom";

const Problems = () => {

    const problems = [
        {
            language: "javaScript",
            problems: [
                {
                    title: "FizzBuzz",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Reverse a String",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Two sum",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "python",
            problems: [
                {
                    title: "Palindrome Check",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Factorial",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Fibonacci Series",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "java",
            problems: [
                {
                    title: "String Reversal",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Prime Number Check",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Array Sum",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "C++",
            problems: [
                {
                    title: "Factorial",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "GCD and LCM",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Array Average",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "Ruby",
            problems: [
                {
                    title: "Palindrome Check",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "FizzBuzz",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Prime Number Check",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "Swift",
            problems: [
                {
                    title: "Fibonacci Series",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Reverse a String",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Array Sum",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "PHP",
            problems: [
                {
                    title: "String Reversal",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "GCD and LCM",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Palindrome Check",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "Kotlin",
            problems: [
                {
                    title: "Array Average",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "FizzBuzz",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Factorial",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "C#",
            problems: [
                {
                    title: "Prime Number Check",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Reverse a String",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "GCD and LCM",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "Go",
            problems: [
                {
                    title: "Two sum",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Palindrome Check",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Fibonacci Series",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "Rust",
            problems: [
                {
                    title: "Array Sum",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Reverse a String",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Prime Number Check",
                    level: "easy",
                    answer: ""
                }
            ]
        },
        {
            language: "TypeScript",
            problems: [
                {
                    title: "Array Average",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Palindrome Check",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Two sum",
                    level: "easy",
                    answer: ""
                }
            ]
        }
        // Add more objects like this if needed
    ];

    return (
        <div className="flexcode-container ">
            <div className="mb-10 montserrat">
                <h1 className="text-3xl text-white font-semibold"> Most Popular languages</h1>
                <p className="text-md text-white mt-1 tracking-wider">A collection of most popular problems.</p>
            </div>
            <section className=" grid grid-cols-3 montserrat mb-24 mt-16 justify-center rounded-lg w-5/6 mx-auto">
                {
                    problems?.map((problem, index) => <Link to={`${problem?.language}`} key={index}
                        className={`${problems.reduce((total, i) => total + index, 0) - 3 <= index ? 'border-b' : ''} ${[9, 10, 11].includes(index) ? "" : "border-b"} ${[1, 4, 7, 10, 13].includes(index) ? "border-x" : ""} cursor-pointer hover:bg-[#0fcda1] hover:text-[#17181b] transition-all flex justify-center items-center`}>
                        <p className="md:text-2xl font-semibold text-center py-5">{problem.language}</p>
                    </Link>)
                }

            </section>
            <div className="mb-10 montserrat">
                <h1 className="text-3xl text-white font-semibold"> See What's new for you</h1>
                <p className="text-md text-white mt-1 tracking-wider">Our weekly and monthly best problems.</p>
            </div>
            <section className="grid md:grid-cols-2 gap-10 w-5/6 mx-auto md:w-full">
                <aside className="border hover:border-[#0fcda1] rounded-lg montserrat flex justify-between px-5 items-center">
                    <div className="flex flex-col gap-3 p-5">
                        <p className="text-md font-semibold text-white mt-1 tracking-wider"> Problem of the month.</p>
                        <span className="flex items-center gap-5">
                            <p className="text-xs text-gray-400 tracking-wider"> Challenges: <span className="text-white">2000</span>.</p>
                            <p className="text-xs text-gray-400 tracking-wider"> Attempts: <span className="text-white">4000</span>.</p>
                        </span>
                        <h1 className="text-3xl mt-2 tracking-wide text-white font-bold"> Two sum</h1>
                        <span className="flex items-center gap-5">
                            <p className="text-xs text-gray-400 tracking-wider"> Level: <span className="text-white">Easy</span>.</p>
                            <p className="text-xs mt-1 text-gray-400 tracking-wider"> Language: <span className="text-white">JavaScript</span>.</p>
                        </span>
                    </div>
                    <div>

                        <button className="btn select-none mt-5 md:mt-0 hover:bg-[#1e2d40] hover:border-2 hover:border-[#0fcda1] hover:text-[#0fcda1] text-white"
                        >Solve Problem</button>
                    </div>
                </aside>
                <aside className="border hover:border-[#0fcda1] rounded-lg montserrat flex justify-between px-5 items-center">
                    <div className="flex flex-col gap-3 p-5">
                        <p className="text-md font-semibold text-white mt-1 tracking-wider"> Problem of the month.</p>
                        <span className="flex items-center gap-5">
                            <p className="text-xs text-gray-400 tracking-wider"> Challenges: <span className="text-white">2000</span>.</p>
                            <p className="text-xs text-gray-400 tracking-wider"> Attempts: <span className="text-white">4000</span>.</p>
                        </span>
                        <h1 className="text-3xl mt-2 tracking-wide text-white font-bold"> Two sum</h1>
                        <span className="flex items-center gap-5">
                            <p className="text-xs text-gray-400 tracking-wider"> Level: <span className="text-white">Easy</span>.</p>
                            <p className="text-xs mt-1 text-gray-400 tracking-wider"> Language: <span className="text-white">JavaScript</span>.</p>
                        </span>
                    </div>
                    <div>

                        <button className="btn select-none mt-5 md:mt-0 hover:bg-[#1e2d40] hover:border-2 hover:border-[#0fcda1] hover:text-[#0fcda1] text-white"
                        >Solve Problem</button>
                    </div>
                </aside>

            </section>
        </div>


    );
};
export default Problems;