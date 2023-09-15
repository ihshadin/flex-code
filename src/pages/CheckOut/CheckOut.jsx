import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaRegAddressBook,
  FaRegEnvelope,
  FaSpinner,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const CheckOut = () => {
  const { user, loading } = useAuth();
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

    fetch("https://flex-code-server.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data?.url);
      });
  };

  return (
    <div className="flexcode-container !pt-16 md:!pt-10 text-white flex flex-col md:flex-row items-stretch gap-y-5 md:gap-x-6">
      <div className="exploreCard border border-slate-500 hover:border-[#0fcda156] transition-all p-5 md:p-10 rounded-2xl md:w-[60%]">
        <div>
          <div className="flex flex-col md:flex-row gap-y-2 justify-between mb-6">
            <h1 className="text-base font-semibold">
              <span className="text-4xl font-extrabold text-[#0fcda1]">
                Yearly{" "}
              </span>
              billed yearly ({" "}
              <span className="text-[#0fcda1] font-semibold">$159 </span> )
            </h1>
            <h1 className="flex items-center text-xl font-semibold">
              <span className="mr-2">
                <FaTrophy className="text-2xl text-[#0fcda190]" />
              </span>
              Most popular plan
            </h1>
          </div>
          <p className="text-xl">
            Our most
            <span className="text-[#0fcda1] font-semibold"> popular plan </span>
            previously sold for
            <span className="text-[#0fcda1] font-semibold"> $299 </span>
            and is now only
            <span className="text-[#0fcda1] font-semibold"> $13.25 </span>
            /Life time. This plan saves you over 60% in comparison to the yearly
            plan.
          </p>
          <div className="flex flex-col md:flex-row justify-between md:items-center mt-10">
            <h1 className="text-xl">
              <span className="text-3xl md:text-4xl font-semibold">
                $13.25{" "}
              </span>
              / Life time
            </h1>
            <h1 className="text-base md:text-xl">Prices are marked in USD</h1>
          </div>
        </div>
      </div>
      <div className="exploreCard border border-slate-500 hover:border-[#0fcda156] transition-all p-5 md:p-10 rounded-2xl md:w-[40%]">
        <h1 className="text-2xl font-semibold mb-4">Payment Checkout</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 text-slate-400"
        >
          <div className="w-full flex items-center gap-2 border border-slate-500 px-2 rounded-lg hover:bg-[#17181B]">
            <FaUser className="w-5 h-5 text-[#0fcda156]" />
            <input
              className="flex-1 bg-transparent text-base outline-none py-2 cursor-not-allowed"
              type="text"
              autoComplete="off"
              name="name"
              {...register("name", { required: true })}
              id=""
              value={user?.displayName}
              placeholder="Your Name"
            />
          </div>
          <div className="w-full flex items-center gap-2 border border-slate-500 px-2 rounded-lg hover:bg-[#17181B]">
            <FaRegEnvelope className="w-5 h-5 text-[#0fcda156]" />
            <input
              className="flex-1 bg-transparent text-base outline-none py-2 cursor-not-allowed"
              type="email"
              autoComplete="off"
              name="email"
              {...register("email", { required: true })}
              id=""
              value={user?.email}
              placeholder="Email"
            />
          </div>
          <div className="w-full flex items-center gap-2 border border-slate-500 px-2 rounded-lg hover:bg-[#17181B]">
            <FaPhone className="w-5 h-5 text-[#0fcda156]" />
            <input
              className="flex-1 bg-transparent text-base outline-none py-2"
              type="number"
              name="number"
              autoComplete="off"
              {...register("number", { required: true })}
              id=""
              placeholder="phone number"
            />
            {errors.number && (
              <span className="text-red-500">Number is required</span>
            )}
          </div>
          <div className="w-full flex items-center gap-2 border border-slate-500 px-2 rounded-lg hover:bg-[#17181B]">
            <FaRegAddressBook className="w-5 h-5 text-[#0fcda156]" />
            <input
              className="flex-1 bg-transparent text-base outline-none py-2"
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
            <button type="submit" className="flexcode-button py-3 px-16 w-full">
              {loading ? (
                <FaSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "  Pay Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
