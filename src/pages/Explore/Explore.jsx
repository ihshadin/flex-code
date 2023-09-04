import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ExploreCard from "./ExploreCard";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import About from "./About";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import ExploreCardLoading from "../../components/FlexcodeLoading/ExploreCardLoading";

const Explore = () => {
  const [axiosNormal] = useAxiosNormal();
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosNormal.get("/explore")
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false)
      });
  }, []);

  return (
    <section>
      <div className="flexcode-container">
        <PageBannerTitle
          title="About Us"
          shortDesc="Who we are and what we do,"
        />
        <About></About>
        <div className="my-8 md:my-16">
          <PageBannerTitle
            title="Explore"
            shortDesc="The best place for problem solving with exploring smart contracts"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 my-5 md:my-10">
            {
              isLoading ? (
                <ExploreCardLoading />
              ) : (
                technologies?.map((technology, index) => (
                  <ExploreCard key={index} technology={technology} />
                ))
              )
            }
          </div>
        </div>

        <div className="my-8 md:my-16">
          <Feedback />
        </div>
      </div>
    </section>
  );
};
export default Explore;
