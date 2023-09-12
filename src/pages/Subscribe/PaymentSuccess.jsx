import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import ConfettiExplosion from "react-confetti-explosion";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  const [data, setData] = useState();
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get(`/payment/${tranId}`).then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div className="flex justify-center pt-16 md:pt-9 pb-6 md:pb-12">
      <div className="bg-[#1E2D40] rounded-md">
        <h1 className="flex justify-center pt-8 pb-1">
          <FaRegCheckCircle size={45} className="text-center text-[#0fcda1]" />
        </h1>
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#0fcda1] text-center">
          Congratulations!
        </h1>
        <p className="text-center text-sm md:text-lg pt-1 pb-2">
          You are our premium member
        </p>
        <div className="max-w-full flex justify-center border-2 border-[#0fcda1]  rounded md:mx-8 md:my-8 my-2"></div>
        <div className="flex justify-center ">
          <div className="px-8 py-8 text-lg md:w-[500px] leading-9 text-slate-400 mb-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p>Sender Name :</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.name}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 md:mt-0">
              <p>Payment Time :</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.time}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 md:mt-0">
              <p>Email :</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.email}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 md:mt-0">
              <p>Transition ID :</p>
              <p className="text-lg font-semibold text-slate-300">
                {data?.transactionId}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 md:mt-0">
              <p>Phone Number :</p>
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
