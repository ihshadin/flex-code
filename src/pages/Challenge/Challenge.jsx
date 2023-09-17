
import React from "react";
import useAllProblems from "../../Hooks/useAllProblems";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import ProblemCard from "../Problems/ProblemCard";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Challenge = () => {

const {state} = useLocation()
console.log(state?.username);
    const {allProblems} = useAllProblems();
    const nonPremiumProblems = allProblems.filter(problem => problem.isPremium === false);
    return (
        <div className="flexcode-container">
          <Helmet title="Flex Code | Challenges"/>

              <PageBannerTitle
                    title={`Challenge Now !`}
                    shortDesc="Give your best to unlock the power of problem solving."
                />
           <div className="grid md:grid-cols-2 gap-6 mt-5">
            {nonPremiumProblems?.map((problem) => (
              <ProblemCard key={problem._id} problem={problem} challenger={state.username}/>
            ))}
          </div>
        </div>
    );
};
export default Challenge;