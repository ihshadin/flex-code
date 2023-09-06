import { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Pagination from "../../components/Pagination/Pagination";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import CardLoading from "../../components/FlexcodeLoading/CardLoading";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import ProblemCard from "./ProblemCard";

const LangBasedProblems = () => {
    const { languages } = useParams()
    const [problems, setProblems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 10; // Just change the number to 10
    const [axiosNormal] = useAxiosNormal();
    const [isLoading, setIsLoading] = useState(true);
    const [totalProblems, setTotalProblems] = useState(0);
    const totalPages = Math.ceil(totalProblems / itemsPerPage)

    // specific language base problems
    const specificLanguageProblems = problems?.filter(problem => problem.language.toLowerCase() === languages)



    useEffect(() => {
        axiosNormal.get(`/problem/?&page=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then((data) => {
                setProblems(data.data);
                setIsLoading(false)
            });
        setTotalProblems(specificLanguageProblems.length)
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
                                            <ProblemCard key={problem._id} problem={problem} />
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