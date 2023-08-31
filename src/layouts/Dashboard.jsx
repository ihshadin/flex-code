import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      <NavBar />
      <div className="drawer lg:drawer-open flexcode-container !py-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center">
          {/* Page content here */}
          <div className="w-full ">
            <Outlet />
            {/* <Footer /> */}
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className="bg-gray-800 menu p-4 w-80 text-white py-5 rounded-lg h-screen">
            <div className="pt-8 pb-6 mb-4 border-b-2 border-[#0fcda185]">
              <div className="flex justify-center items-center mb-4">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user?.photoURL}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "2px solid #0fcda185",
                    padding: "5px",
                  }}
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl text-white font-semibold mb-1">
                  {user?.displayName}
                </h2>
                <h5 className="text-green-500">{user?.email}</h5>
              </div>
            </div>
            <ul>
              <li>
                <Link
                  to="/dashboard/main"
                  className="flex items-center px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40 mt-2"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-teal-300"></span>
                  </span>
                  <span>Dashboard Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/manageuser"
                  className="flex items-center px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40 mt-2"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                  </span>
                  <span>Manage Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/add-blog"
                  className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  <span>Add Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/add-problems"
                  className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-teal-400"></span>
                  </span>
                  <span>Add Problem</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/my-submittions"
                  className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-300"></span>
                  </span>
                  <span>Contacts</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/calendar"
                  className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  </span>
                  <span>Calendar</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/playground"
                  className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40 mt-2"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                  </span>
                  <span>Write Note</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;
