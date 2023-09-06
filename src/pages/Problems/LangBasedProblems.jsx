import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Pagination from "../../components/Pagination/Pagination";
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

    useEffect(() => {
        axiosNormal.get(`/problem/${languages}?page=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then((data) => {
                setProblems(data.languageProblems);
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
                            problems.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {problems?.map((problem, index) => (
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