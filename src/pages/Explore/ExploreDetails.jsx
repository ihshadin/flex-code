import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import SinExpLoading from "../../components/FlexcodeLoading/SinExpLoading";

const ExploreDetails = () => {
  const { id } = useParams();
  const [explore, setExplore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get(`/explore/${id}`).then((data) => {
      setExplore(data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <section>
      <div className="my-12 w-[95%] md:w-full md:max-w-[80%] mx-auto">
        {isLoading ? (
          <SinExpLoading />
        ) : (
          <div className="lg:px-10 bg-secondary-color md:py-10 md:px-6 rounded-xl">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={explore?.image}
              alt="Blog Image"
            />
            <div className="p-3 md:p-0">
              <p className="md:mt-6 text-sm text-white uppercase">
                Let's Explore
              </p>
              <h1 className="mt-1 md:mt-2 text-lg md:text-2xl font-semibold leading-tight primary-color">
                {explore?.title}
              </h1>
              <p className=" text-white mt-5 text-justify mb-5">
                {explore?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreDetails;
