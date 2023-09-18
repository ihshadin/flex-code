import React, { useEffect, useState } from "react";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import { key } from "localforage";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";

const SendEmail = () => {
  const [messages, setMessages] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/sendEmail").then((data) => {
      setMessages(data.data);
    });
  }, []);

  return (
    <motion.div
      key="flex_04896dffhj15sdf"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="text-white md:mx-7 md:my-5"
    >
      {/* Heading */}
      <div className="border-b-2 border-[#0fcda185] pb-3 mb-8 ">
        <h1 className="text-white text-2xl md:text-4xl tracking-wider font-semibold">
          All Messages
        </h1>
        <p className="text-slate-300 text-sm md:text-base mt-1">
          From our valuable users{" "}
        </p>
      </div>
      {/* Email Accordion */}
      {messages.map((message, index) => (
        <div key={message._id} className="md:flex justify-between mt-3">
          <div className="mx-auto md:w-[80%]">
            <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-950 border-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium">
                <span className="mr-4 text-lg font-normal">{index + 1}</span>
                {message.email}
              </div>
              <div className="collapse-content">
                <h2 className="text-slate-300 ml-9 text-md font-bold mr-4 mb-3">
                  {message.name}
                </h2>
                <p className="text-slate-300 ml-9 text-md font-normal mr-4">
                  {message.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SendEmail;
