import React, { useEffect, useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
import ExploreCard from "./ExploreCard";
import About from "./About";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import ExploreCardLoading from "../../components/FlexcodeLoading/ExploreCardLoading";
import { motion } from "framer-motion";
import OurTeam from "./OurTeam/OurTeam";
import { Helmet } from "react-helmet";

const Explore = () => {
  const [axiosNormal] = useAxiosNormal();
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosNormal.get("/explore").then((data) => {
      setTechnologies(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <Helmet title="Flex Code | Explore us" />
      <motion.div
        key="flex_468855gsdf11df"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="flexcode-container !pt-16 md:!pt-10"
      >
        <PageBannerTitle
          title="About Us"
          shortDesc="Who we are and what we do,"
        />
        <About />

        <OurTeam />

        <div className="my-8 md:my-16">
          <PageBannerTitle
            title="Explore"
            shortDesc="The best place for problem solving with exploring smart contracts"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 my-5 md:my-10">
            {isLoading ? (
              <ExploreCardLoading />
            ) : (
              technologies?.map((technology, index) => (
                <ExploreCard key={index} technology={technology} />
              ))
            )}
          </div>
        </div>

        <div className="my-8 md:my-16">
          <Feedback />
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
