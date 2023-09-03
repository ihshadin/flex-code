import { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Pagination from "../../components/Pagination/Pagination";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import CardLoading from "../../components/FlexcodeLoading/CardLoading";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const LangBasedProblems = () => {
    const { languages } = useParams()
    const [problems, setProblems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 6; // Just change the number to 10
    const [axiosNormal] = useAxiosNormal();
    const [isLoading, setIsLoading] = useState(true);
    const [totalProblems, setTotalProblems] = useState(0);
    const totalPages = Math.ceil(totalProblems / itemsPerPage)

    // specific language base problems
    const specificLanguageProblems = problems?.filter(problem => problem.language.toLowerCase() === languages)

    useEffect(() => {
        // axiosNormal.get(`/problem?page=${currentPage}&limit=${itemsPerPage}`)
        //     .then(data => {
        //         setProblems(data)
        //     })
        axiosNormal.get(`/problem/?&page=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then((data) => {
                setProblems(data.data);
                setTotalProblems(data.totalCount)
                setIsLoading(false)
            });
    }, [currentPage, itemsPerPage]);

    return (
        <section>
            <div className="flexcode-container">
                <PageBannerTitle
                    title={`All ${languages} Problems`}
                    shortDesc="Give your best to unlock the power of problem solving."
                />
                <div className="mt-10">
                    {
                        isLoading ? (
                            <CardLoading />
                        ) : (
                            specificLanguageProblems.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6">
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
                                    </div>
                                    <Pagination currentPage={currentPage} totalPage={totalPages} setCurrentPage={setCurrentPage} />
                                </>
                            ) : (
                                <ComingSoon />
                            )
                        )
                    }
                </div>
            </div>
        </section>
    );
};
export default LangBasedProblems;