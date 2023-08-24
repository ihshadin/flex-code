import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const PaymentFail = () => {
  const { tranId } = useParams();

  return (
    <div className="flexcode-container flex justify-center mb-12">
      <div className="bg-[#1E2D40] rounded-md">
        <h1 className="flex justify-center pt-8  pb-1">
          <FaTimes
            size={55}
            className="text-center animate-pulse text-[#e71717] border-4 p-1 border-[#e71717] rounded-full "
          />
        </h1>
        <h1 className="text-4xl fail-title  font-extrabold text-[#0fcda1] text-center">
          Payment Error!
        </h1>
        <p className="text-center text-lg pt-2 pb-2 mx-12">
          Payment for Order ID {tranId} could <br /> not be proceed. Try agin.
        </p>
        <div className="max-w-full flex justify-center border-2 border-[#0fcda1]  rounded mx-8 my-8"></div>
        <div className="flex justify-center ">
          <div className="px-8 pb-8 pt-2 text-lg w-[500px] leading-9 text-slate-400">
            <div className="flex justify-between items-center">
              <p>Total Payment</p>
              <p className="text-lg font-semibold text-slate-300">BDT 1139.5</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-12">
          <Link to="/checkout">
            <button className="flexcode-button py-3 px-16 ">Pay Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
