import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import SinExpLoading from "../../components/FlexcodeLoading/SinExpLoading";
import { Helmet } from "react-helmet";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";

const ExploreDetails = () => {
  const { id } = useParams();
  const [explore, setExplore] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/explore").then((data) => {
      setTechnologies(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    axiosNormal.get(`/explore/${id}`).then((data) => {
      setExplore(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <FlexcodeLoading />;
  }

  return (
    <section>
      <Helmet title={`Flex Code | ${explore?.title || 'Explore'}`}/>
       <div className="flexcode-container !pt-16 md:!pt-10">
        <div className="lg:flex">

          {/* Single Explore details side */}
          <div className="lg:w-[70%] lg:px-10 bg-secondary-color md:py-10 md:px-6 rounded-xl">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={explore?.image}
              alt="Blog Image"
            />
            <div className="p-3 md:p-0">
              <p className="md:mt-6 text-sm text-white uppercase">
                Want to know
              </p>
              <h1 className="mt-2 md:mt-4 text-lg md:text-2xl font-semibold leading-tight primary-color">
                {explore?.title}
              </h1>
              <p className=" text-white mt-5 text-justify mb-5">{ explore?.description }
              </p> 
            </div>
          </div>

          {/* List of Explore Side side */}
          <div className="mt-8 lg:w-[30%] lg:mt-0 lg:px-6">
            <h2 className="text-2xl font-semibold pb-5">Recent Documentation</h2>

            {
              isLoading ? (
                <>
                  <div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-4 w-[80%] rounded"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-full rounded mt-3"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-1/2 rounded mt-2"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-1 w-full rounded my-7"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-4 w-[80%] rounded"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-full rounded mt-3"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-1/2 rounded mt-2"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-1 w-full rounded my-7"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-4 w-[80%] rounded"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-full rounded mt-3"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-1/2 rounded mt-2"></div>
                    <div className="bg-slate-500 animate-pulse bg-opacity-50 h-1 w-full rounded my-7"></div>
                  </div>
                </>
              ) : (
                technologies?.slice(0, 5).map((technology) => (
                  <div key={technology?._id}>
                    <Link to={`/explore/${technology?._id}`}>
                      <h2 className="block mt-2 font-medium text-white hover:underline hover:text-[#0fcda1]">
                        {technology?.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-slate-300 mb-5"> 
                    {
                      technology.description.length > 50
                        ? technology.description.slice(0, 50) + "..."
                        : technology.description
                    } 
                    </p>
                    <hr className="my-6 border border-[#0fcda18c]" />
                  </div>
                ))
              )
            }
          </div>
        </div>
      </div>


    </section>
  );
};

export default ExploreDetails;
