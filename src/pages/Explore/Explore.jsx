import { useNavigation } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ExploreCard from "./ExploreCard";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import About from "./About";
import { useEffect, useState } from "react";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";

const Explore = () => {
  const [axiosNormal] = useAxiosNormal();
  const [exploreCards, setExploreCards] = useState([]);

  useEffect(() => {
    axiosNormal.get("/exploreDetails").then((data) => {
      setExploreCards(data);
    });
  }, []);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

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
            {exploreCards?.map((explore, index) => (
              <ExploreCard key={index} explore={explore} />
            ))}
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
