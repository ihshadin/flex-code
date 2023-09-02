import { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Pagination from "../../components/Pagination/Pagination";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";

const LangBasedProblems = () => {
    const { languages } = useParams()
    const [problems, setProblems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 6; // Just change the number to 10
    const [axiosNormal] = useAxiosNormal();
    const specificLanguageProblems = problems?.filter(problem => problem.language.toLowerCase() === languages)

    useEffect(() => {
        axiosNormal.get(`/problem?page=${currentPage}&limit=${itemsPerPage}`)
            .then(data => {
                setProblems(data)
            })
    }, [currentPage, itemsPerPage]);



    const result = useLoaderData()
    const totalProblems = result?.length;
    const totalPage = Math.ceil(totalProblems / itemsPerPage)
    console.log(result);

    return (
        <section>
            <div className="flexcode-container">

                {/* <div className="mb-10 montserrat flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-white font-semibold"> All popular <span className="text-[#0fcda1]">{languages}</span> problems</h1>
                    <p className="text-md text-white mt-1 tracking-wider">Give your best to unlock the power of problem solving.</p>
                </div> */}
                {/* <div className="w-3/4 mx-auto montserrat">
                    {
                        specificLanguageProblems.problems?.map((problem, i) =>
                            <div className="flex flex-col md:flex-row mb-8 justify-between items-center border px-10 py-6 rounded-xl">
                                <div>
                                    <h1 className="text-3xl mb-5 text-white font-semibold"> {problem.title}</h1>
                                    <span className="flex items-center gap-5">
                                        <p className="text-xs text-gray-400 tracking-wider"> Type: <span className={`${problem.level === 'easy' ? 'text-green-500' : problem.level === 'difficult' ? 'text-red-500' : "text-orange-500"}`}>{problem.level}</span>.</p>
                                        <p className="text-xs text-gray-400 tracking-wider"> Attempts: <span className="text-white">4000</span>.</p>
                                        <p className="text-xs text-gray-400 tracking-wider"> Success rate: <span className="text-white">53.42%</span>.</p>
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link to={`/problem/1`} className="flexcode-button text-xs py-2 px-4">
                                        Solve Problem
                                    </Link>
                                    <Link to='/feedback' className="flexcode-button text-xs py-2 px-4 text-center">
                                        Feedback
                                    </Link>
                                </div>
                            </div>)
                    }

                </div> */}
                {
                    specificLanguageProblems.length > 0 ? (
                        <><PageBannerTitle
                            title={`All ${languages} Problems`}
                            shortDesc="Give your best to unlock the power of problem solving."
                        />
                            <div className="grid md:grid-cols-2 gap-6 py-12">
                                {specificLanguageProblems?.map((problem, index) => (
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
                                                    Language: <span className="text-white">{problem.language}</span>.
                                                </p>

                                            </div>
                                        </div>
                                        <div className="shrink-0">
                                            <Link
                                                to={`/problem/${problem._id}`}
                                                className="flexcode-button text-xs py-2 px-3"
                                            >
                                                Solve Problem
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div></>
                    ) : (
                        <FlexcodeLoading />
                    )
                }
            </div>
            <div>
                <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    );
};
export default LangBasedProblems;