import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  const [data, setData] = useState();
  console.log(data);
  //   const {
  //     access,
  //     address,
  //     amount,
  //     currency,
  //     email,
  //     number,
  //     paidStatus,
  //     transactionId,
  //   } = data;

  useEffect(() => {
    fetch(`http://localhost:5000/payment/${tranId}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="flexcode-container flex justify-center mb-12">
      <div className="bg-[#1E2D40] rounded-md">
        <h1 className="flex justify-center pt-8 pb-1">
          <FaRegCheckCircle size={45} className="text-center text-[#0fcda1]" />
        </h1>
        <h1 className="text-4xl font-extrabold text-[#0fcda1] text-center">
          Congratulations!
        </h1>
        <p className="text-center text-lg pt-1 pb-2">
          You are our premium member
        </p>
        <div className="max-w-full flex justify-center border-2 border-[#0fcda1]  rounded mx-8 my-8"></div>
        <div className="flex justify-center ">
          <div className="px-8 py-8 text-lg w-[500px] leading-9 text-slate-400 mb-3">
            <div className="flex justify-between items-center">
              <p>Sender Name</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.name}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Payment Time</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.time}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Email</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.email}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Transition id</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.transactionId}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Phone Number</p>
              <p className="text-lg font-semibold text-slate-300">
                +880 {data?.number}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
