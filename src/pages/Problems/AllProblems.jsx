import { Link, useParams } from "react-router-dom";

const AllProblems = () => {
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
                    level: "difficult",
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
                    level: "difficult",
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
                    level: "difficult",
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
                    level: "difficult",
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
                    level: "difficult",
                    answer: ""
                },
                {
                    title: "FizzBuzz",
                    level: "easy",
                    answer: ""
                },
                {
                    title: "Prime Number Check",
                    level: "difficult",
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
    const { languages } = useParams()
    // console.log(languages);
    const specificLanguageProblems = problems.filter(problem => problem.language === languages)
    console.log(specificLanguageProblems[0].problems);
    return (
        <div className="flexcode-container">
            <div className="mb-10 montserrat flex flex-col justify-center items-center">
                <h1 className="text-4xl text-white font-semibold"> All popular <span className="text-[#0fcda1]">{languages}</span> problems</h1>
                <p className="text-md text-white mt-1 tracking-wider">Give your best to unlock the power of problem solving.</p>
            </div>
            <section className="w-3/4 mx-auto montserrat">
                {
                    specificLanguageProblems[0].problems?.map((problem, i) => <div className="flex flex-col md:flex-row mb-8 justify-between items-center border px-10 py-6 rounded-xl">
                        <aside>
                            <h1 className="text-3xl mb-5 text-white font-semibold"> {problem.title}</h1>
                            <span className="flex items-center gap-5">
                                <p className="text-xs text-gray-400 tracking-wider"> Type: <span className={`${problem.level === 'easy' ? 'text-green-500' : problem.level === 'difficult' ? 'text-red-500' : "text-orange-500"}`}>{problem.level}</span>.</p>
                                <p className="text-xs text-gray-400 tracking-wider"> Attempts: <span className="text-white">4000</span>.</p>
                                <p className="text-xs text-gray-400 tracking-wider"> Success rate: <span className="text-white">53.42%</span>.</p>
                            </span>
                        </aside>
                       <div className="flex flex-col gap-2">
                       <button className="btn btn-sm  select-none mt-5 md:mt-0 hover:bg-[#1e2d40] hover:border-2 hover:border-[#0fcda1] hover:text-[#0fcda1] text-white"
                        >Solve Problem</button>
                         <Link to='/feedback' className="btn btn-sm btn-outline hover:bg-transparent select-none mt-5 md:mt-0 hover:bg-[#1e2d40] hover:border-2 hover:border-[#0fcda1] hover:text-[#0fcda1] text-white"
                        >Feedback</Link>
                       </div>
                    </div>)
                }

            </section>
        </div>
    );
};
export default AllProblems;