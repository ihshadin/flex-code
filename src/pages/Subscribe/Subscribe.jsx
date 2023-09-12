import { Link } from "react-router-dom";
import img from "../../assets/5.png";
import "./Subscribe.css";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="flexcode-container"
    >
      <PageBannerTitle
        title="Premium Subscription"
        shortDesc="FlexCode provides detailed descriptions of various products, including electronics, books, clothing, and more."
      />
      <div className="md:flex items-center w-full flexcode-banner-bg rounded-2xl shadow-2xl pt-2 pb-10 px-4 md:px-16 justify-between mt-8">
        <div className="mb-8 md:mb-16 max-h-screen md:px-5 md:w-[40%]">
          <h1 className="text-2xl md:text-3xl text-white font-bold mt-2 premium-desc">
            Premium Service
          </h1>
          <p className="md:text-lg font-normal mt-6 premium-desc">
            Get started with a <span className="text-[#0fcda1]">Flex</span>code
            Subscription that works for you.
          </p>

          <div className="mt-12">
            <Link to="/checkout">
              <button className="p-container">
                <div className="left-side">
                  <div className="card">
                    <div className="card-line"></div>
                    <div className="buttons"></div>
                  </div>
                  <div className="post">
                    <div className="post-line"></div>
                    <div className="screen">
                      <div className="dollar">$</div>
                    </div>
                    <div className="numbers"></div>
                    <div className="numbers-line2"></div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="new text-black">Subscribe Now</div>
                  <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 451.846 451.847"
                  >
                    <path
                      d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#00000"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-60%">
          <div className="h-[20rem] w-[20rem] md:h-[28rem] md:w-[28rem]">
            <img className="" src={img} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Subscribe;
