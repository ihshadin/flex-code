import { Link } from "react-router-dom";
import img from "/20230810_125620.png";
import { FaTrophy } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section>
      <div className="flexcode-container -mt-10 max-h-screen mb-16">
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <div className="h-36 w-36 mx-auto">
              <img src={img} alt="" sizes="200" />
            </div>
            <h1 className="text-4xl text-white font-bold mt-2">Premium</h1>
            <p className="text-2xl font-semibold mt-4">
              Get started with a{" "}
              <span className="text-[#0fcda1] font-semibold ">Flex</span>code
              Subscription that works for you.
            </p>
          </div>
        </div>

        <div className="exploreCard border border-gray-500 hover:border-[#0fcda1] transition-all p-10 rounded-md mx-auto mt-8 ">
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
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
