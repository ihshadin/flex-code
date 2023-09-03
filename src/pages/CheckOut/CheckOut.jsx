import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaRegAddressBook,
  FaRegEnvelope,
  FaSpinner,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const { user, loading } = useContext(AuthContext);

  // const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const number = parseInt(data.number);
    console.log(number);
    data.amount = 13.25 * 86;
    data.number = number;
    data.currency = "BDT";

    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data?.url);
        // setLoading(false);
      });
    // setLoading(false);
    console.log("Main data", data);
  };

  return (
    <div className="flex items-center gap-x-6 flexcode-container">
      <div className="exploreCard border my-8 border-gray-500 hover:border-[#0fcda1] transition-all p-10 rounded-md w-[60%]">
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
            <span className="mr-2">
              <FaTrophy size={22} color="#0fcda1" />
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
          <span className="text-[#0fcda1] font-semibold">$299 </span> and is now
          only <span className="text-[#0fcda1] font-semibold">$13.25 </span>
          /Life time. This plan saves you over 60% in comparison to the yearly
          plan.
        </p>
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-xl">
            <span className="text-4xl font-semibold">$13.25 /</span>Life time
          </h1>
          <h1 className="text-xl">Prices are marked in USD</h1>
        </div>
      </div>
      <div class="exploreCard border border-gray-500 hover:border-[#0fcda1] transition-all p-10 rounded-lg w-[40%] text-white">
        <h1 class="text-2xl font-semibold mb-4">Payment Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 px-2 font-semibold rounded-md mb-5 hover:bg-[#17181B] cursor-pointer">
            <FaUser className="text-lg mr-2 " />
            <input
              className="flex-1 bg-transparent  hover:bg-[#17181B] text-sm outline-none py-2"
              type="text"
              autoComplete="off"
              name="name"
              {...register("name", { required: true })}
              id=""
              value={user?.displayName}
              placeholder="Your Name"
            />
            {/* {errors.name && (
              <span className="text-red-500">Name is required</span>
            )} */}
          </div>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 font-semibold rounded-md mb-5 px-2 hover:bg-[#17181B] cursor-pointer">
            <FaRegEnvelope className="text-lg mr-2" />
            <input
              className="flex-1 bg-transparent  hover:bg-[#17181B] text-sm outline-none py-2"
              type="email"
              autoComplete="off"
              name="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Email"
              value={user?.email}
            />
            {/* {errors.email && (
              <span className="text-red-500">Email is required</span>
            )} */}
          </div>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 font-semibold rounded-md mb-3 px-2 hover:bg-[#17181B] cursor-pointer">
            <FaPhone className="text-lg mr-2" />
            <input
              className="flex-1 bg-transparent  hover:bg-[#17181B] text-sm outline-none py-2"
              type="number"
              name="number"
              autoComplete="off"
              {...register("number", { required: true })}
              id=""
              placeholder="phone number"
            />{" "}
            {errors.number && (
              <span className="text-red-500">Number is required</span>
            )}
          </div>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 font-semibold rounded-md mb-5 px-2 hover:bg-[#17181B] cursor-pointer">
            <FaRegAddressBook className="text-lg mr-2" />
            <input
              className="flex-1 bg-transparent  hover:bg-[#17181B] text-sm outline-none py-2"
              type="text"
              name="address"
              autoComplete="off"
              {...register("address", { required: true })}
              id=""
              placeholder="your address"
            />
            {errors.address && (
              <span className="text-red-500">address is required</span>
            )}
          </div>

          <div className="w-full">
            <button type="submit" class="flexcode-button py-3 px-16 w-full">
              {loading ? (
                <FaSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "  Pay Now"
              )}
            </button>
          </div>
          {/* <button
            onClick={() => setLoading(true)}
            type="submit"
            class="flexcode-button py-3 px-16 w-full"
          >
            {loading ? (
              <FaSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "  Pay Now"
            )}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
