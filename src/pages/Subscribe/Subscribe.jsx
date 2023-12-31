import React from "react";
import { Link } from "react-router-dom";
import "./Subscribe.css";
import { motion } from "framer-motion";
import preLogo from "../../../public/premiumlogo.png";
import { Helmet } from "react-helmet";

const Subscribe = () => {
  return (
    <motion.div
      key="flex_779dhtytdidy23"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="flexcode-container"
    >
      <section>
        <Helmet title="Flex Code | Subscription" />
        <div className="flexcode-container -mt-10 max-h-screen mb-16">
          <div className="flex justify-center items-center ">
            <div className="text-center">
              <div className="h-[15rem] w-[15rem] mx-auto">
                <img src={preLogo} alt="" />
              </div>
              <h1 className="text-4xl text-white font-bold mt-2">Premium</h1>
              <p className="text-2xl font-semibold mt-4">
                Get started with a{" "}
                <span className="text-[#0fcda1] font-semibold ">Flex</span>code
                Subscription that works for you.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 mb-3">
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
      </section>
    </motion.div>
  );
};

export default Subscribe;
