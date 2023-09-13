import React, { useEffect, useState } from "react";

// CSS connect
import "./ExploreUs.css";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import ExploreCardLoading from "../../../components/FlexcodeLoading/ExploreCardLoading";
import ExploreCard from "../../Explore/ExploreCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ExploreUs = () => {
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
      <div className="flexcode-container">
        <div className="">
          <SectionTitle
            title="Explore solutions."
            descrition="Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class."
          ></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 ">
            {isLoading ? (
              <ExploreCardLoading />
            ) : (
              technologies
                ?.slice(0, 3)
                .map((technology, index) => (
                  <ExploreCard key={index} technology={technology} />
                ))
            )}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/explore">
            <button className="flexcode-button px-8 py-3">See more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreUs;
