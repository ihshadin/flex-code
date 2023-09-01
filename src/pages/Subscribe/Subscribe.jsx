import { Link } from "react-router-dom";
import img from "/premiumlogo.png";
// import { FaTrophy } from "react-icons/fa";
import './Subscribe.css'

const Subscribe = () => {
  return (
    <section>
      <div className="flexcode-container -mt-10 max-h-screen mb-16">
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <div className="h-[15rem] w-[15rem] mx-auto">
              <img src={img} alt=""  />
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
            {/* <button className="flexcode-button py-3 px-16 ">Subscribe</button> */}
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
              class="active-path"
              data-old_color="#000000"
              fill="#00000"
            />
          </svg>
        </div>
      </button>
          </Link>
        </div>

        {/* <div className="exploreCard border border-gray-500 hover:border-[#0fcda1] transition-all p-10 rounded-md mx-auto mt-8 ">
          <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold">
              <span className="text-4xl font-extrabold text-[#0fcda1]">
                Yearly{" "}
              </span>
              billed yearly ({" "}
              <span className="text-[#0fcda1] font-semibold">$159 </span> )
            </h1>
            <h1 className="flex items-center text-xl font-semibold">
              {" "}
              <span className="mr-3">
                <FaTrophy size={20} color="#0fcda1" />
              </span>
              {"  "}
              Most popular plan
            </h1>
          </div>
          <p className="text-xl">
            Our{" "}
            <span className="text-[#0fcda1] font-semibold">
              most popular plan
            </span>{" "}
            previously sold for{" "}
            <span className="text-[#0fcda1] font-semibold">$299 </span> and is
            now only{" "}
            <span className="text-[#0fcda1] font-semibold">$13.25 </span>
            /Life time. This plan saves you over 60% in comparison to the yearly
            plan.
          </p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-xl">
              <span className="text-4xl font-semibold">$13.25 /</span>Life time
            </h1>
            <h1 className="text-xl">Prices are marked in USD</h1>
            <div className="flex justify-center mt-8 mb-3">
              <Link to="/checkout">
                <button className="flexcode-button py-3 px-16 ">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Subscribe;
