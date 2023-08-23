import { Link } from "react-router-dom";
import img from "/20230810_125620.png";
import { FaTrophy } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section>
      <div className="flexcode-container mb-16">
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <div className="h-44 w-44 mx-auto">
              <img src={img} alt="" sizes="200" />
            </div>
            <h1 className="text-6xl text-white font-bold mt-2">Premium</h1>
            <p className="text-2xl font-semibold mt-4">
              Get started with a{" "}
              <span className="text-[#00ffc3] font-semibold ">Flex</span>code
              Subscription that works for you.
            </p>
          </div>
        </div>
        {/* You can open the modal using ID.showModal() method */}
        {/* 
        <div className="flex justify-center mt-16">
          <button
            className="flexcode-button py-3 px-5 "
            onClick={() => window.my_modal_3.showModal()}
          >
            Subscribe
          </button>
        </div>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box text-black">
            <button className="btn btn-sm btn-circle text-red absolute right-2 top-2">
              ✕
            </button>
            <div className="w- h-[500px]">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </form>
        </dialog> */}
        {/* <div class="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 class="text-2xl font-semibold mb-4">Payment Checkout</h1>

          <form>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                class="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <input
                type="text"
                class="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                class="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                class="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              class="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
            >
              Pay Now
            </button>
          </form>
        </div> */}
        <div className="bg-secondary-color p-10 rounded-md mt-28">
          <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold">
              <span className="text-4xl font-extrabold text-[#00ffc3]">
                Yearly{" "}
              </span>
              billed yearly ({" "}
              <span className="text-[#00ffc3] font-semibold">$159 </span> )
            </h1>
            <h1 className="flex items-center text-xl font-semibold">
              {" "}
              <span className="mr-1">
                <FaTrophy size={26} color="#00ffc3" />
              </span>
              {"  "}
              Most popular plan
            </h1>
          </div>
          <p className="text-xl">
            Our{" "}
            <span className="text-[#00ffc3] font-semibold">
              most popular plan
            </span>{" "}
            previously sold for{" "}
            <span className="text-[#00ffc3] font-semibold">$299 </span> and is
            now only{" "}
            <span className="text-[#00ffc3] font-semibold">$13.25 </span>
            /Life time. This plan saves you over 60% in comparison to the yearly
            plan.
          </p>
          <div className="flex justify-between items-center mt-10">
            <h1 className="text-xl">
              <span className="text-4xl font-semibold">$13.25 /</span>Life time
            </h1>
            <h1 className="text-xl">Prices are marked in USD</h1>
          </div>
          <div className="flex justify-center mt-8 mb-3">
            <Link to="/checkout">
              <button className="flexcode-button py-3 px-16 ">Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
