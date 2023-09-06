import { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Pagination from "../../components/Pagination/Pagination";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import CardLoading from "../../components/FlexcodeLoading/CardLoading";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import ProblemCard from "./ProblemCard";
import useAllProblems from "../../Hooks/useAllProblems";

const LangBasedProblems = () => {
    const { languages } = useParams()
    const { allProblems, currentPage, setCurrentPage, isLoading, searchText, setSearchText, filterLevel, setFilterLevel } = useAllProblems()

    // specific language base problems
    const specificLanguageProblems = allProblems?.filter(problem => problem.language.toLowerCase() === languages)

    const itemsPerPage = 10;
    const totalPages = Math.ceil(specificLanguageProblems.length / itemsPerPage)

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