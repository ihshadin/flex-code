import { Link } from "react-router-dom";
import banner from "/flex-code-banner2.0.png";
import "./Banner.css";
import bannerBgBottom from "../../../assets/banner-bottom.png";

import { motion } from "framer-motion";
const Banner = () => {


  return (
    <div className="relative flexcode-banner-bg bg-gradient-to-t from-[#05040b] to-[#17181b]">
      {/* Background image */}
      <div className="absolute bottom-0 w-full h-full">
        <img
          className="absolute bottom-0 w-full opacity-80"
          src={bannerBgBottom}
          alt=""
        />
      </div>
      <div className="flexcode-container w-full md:h-screen pt-16 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
          <motion.div
          key="flex_8468hsdfkj21"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="banner-title font-black text-3xl md:text-6xl ">
              Feel like coding <br />
              in your own environment
            </h1>
          </motion.div>

          <div className="mt-10">
            <Link to="/problems">
              <button className="flexcode-button px-8 py-3">
                Get Start Now
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:block relative w-full opacity-90 md:w-[30%]">
          <img src={banner} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
