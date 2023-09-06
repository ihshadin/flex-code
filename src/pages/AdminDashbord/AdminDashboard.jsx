import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { AiOutlineMenuUnfold } from "react-icons/ai"
import './AdminDashboard.css'

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <section>
      <NavBar />
      <div className="drawer lg:drawer-open flexcode-container !py-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center mb-10 overflow-x-auto">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden mr-auto mt-5 mb-10 text-lg inline-flex items-center gap-3 px-5 py-3 group rounded-xl bg-gradient-to-tr from-[#1e2d4056] to-[#0fcda122] border border-gray-500 hover:border-[#0fcda1] focus:border focus:border-[#0fcda1] text-white"
          >
            <AiOutlineMenuUnfold /> Admin Menu
          </label>
          {/* Page content here */}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className="flexcode-banner-bg backdrop-blur-sm md:backdrop-blur-0 w-80 text-white px-4 py-5 pt-16 md:pt-0 rounded-lg h-screen">
            <div className="pt-8 pb-6 mb-4 border-b-2 border-[#0fcda185]">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={user?.photoURL}
                  className="w-[100px] h-[100px] object-cover rounded-full border border-[#0fcda185] p-1 cursor-pointer"
                  alt="profile-user"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl text-white font-semibold">
                  {user?.displayName}
                </h2>
                <p className="text-slate-400">{user?.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/dashboard/"
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-teal-300"></span>
                <span>Dashboard Home</span>
              </NavLink>
              <NavLink
                to="/dashboard/manageuser"
                className="flex items-center px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40"
              >
                <span className="mr-2  flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                </span>
                <span>Manage Users</span>
              </NavLink>
              <NavLink
                to="/dashboard/add-blog"
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-teal-300"></span>
                <span>Add Blog</span>
              </NavLink>
              <NavLink
                to="/dashboard/add-problems"
                className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
              >
                <span className="mr-2  flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-400"></span>
                </span>
                <span>Add Problem</span>
              </NavLink>
              <NavLink
                to="/dashboard/contacts"
                className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
              >
                <span className="mr-2  flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-300"></span>
                </span>
                <span>Contacts</span>
              </NavLink>
              <NavLink
                to="/dashboard/calendar"
                className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
              >
                <span className="mr-2  flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                </span>
                <span>Calendar</span>
              </NavLink>
              <NavLink
                to="/add-note"
                className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
              >
                <span className="mr-2  flex">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                </span>
                <span>Write Note</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AdminDashboard;
