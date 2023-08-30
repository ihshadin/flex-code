import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserAlt, FaArrowUp, FaHighlighter } from "react-icons/fa";
import { FaUsers, FaBug } from "react-icons/fa6";

const OverViewAd = () => {
  const [users, setUsers] = useState([]);
  const [problems, setProblems] = useState([]);
  const [payment, setPayment] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student/all")
      .then((data) => setUsers(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/problem")
      .then((data) => setProblems(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment")
      .then((data) => setPayment(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blog/all")
      .then((data) => setBlogs(data.data.result));
  }, []);

  console.log(payment);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {/* total users  */}
      <div className="rounded-lg border-2 border-gray-400 transition-all group hover:border-[#0fcda1] bg-[#1e2d40] py-4 px-8 shadow-lg">
        <FaUserAlt size={35} className="text-[#0fcda1]" />
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white group-hover:text-gray-300 flex items-center">
              {users.length}
              <span className="group-hover:text-[#0fcda1] text-3xl font-bold">
                +
              </span>
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total Users
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>

      {/* Total Problem  */}
      <div className="rounded-lg border-2 border-gray-400 transition-all group hover:border-[#0fcda1] bg-[#1e2d40] py-4 px-8 shadow-lg">
        <FaBug size={35} className="text-[#0fcda1]" />
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white group-hover:text-gray-300 flex items-center">
              {problems.length}
              <span className="group-hover:text-[#0fcda1] text-3xl font-bold">
                +
              </span>
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total Problem
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>

      {/* Total Blogs  */}

      <div className="rounded-lg border-2 border-gray-400 transition-all group hover:border-[#0fcda1] bg-[#1e2d40] py-4 px-8 shadow-lg">
        <FaHighlighter size={35} className="text-[#0fcda1]" />
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white group-hover:text-gray-300 flex items-center">
              {blogs.length}
              <span className="group-hover:text-[#0fcda1] text-3xl font-bold">
                +
              </span>
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total blog
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>

      {/* Premium users  */}

      <div className="rounded-lg border-2 border-gray-400 transition-all group hover:border-[#0fcda1] bg-[#1e2d40] py-4 px-8 shadow-lg">
        <FaUsers size={35} className="text-[#0fcda1]" />
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white group-hover:text-gray-300 flex items-center">
              {payment.length}
              <span className="group-hover:text-[#0fcda1] text-3xl font-bold">
                +
              </span>
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total Premium User
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div>
      {/* <div className="rounded-lg border border-stroke bg-[#1e2d40] py-4 px-8 shadow-lg">
        <div className="flex">
          <FaUsers className="w-12 h-12 text-[#0fcda1]"></FaUsers>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-2xl font-bold text-white dark:text-white mr-14">
              $3.456K
            </h4>
            <span className="text-sm font-medium text-slate-200 mr-5 mt-2">
              Total Premium Solve
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-slate-200">
            0.43%
            <FaArrowUp></FaArrowUp>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default OverViewAd;
