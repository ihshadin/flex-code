import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import useAxiosNormal from "../hooks/useAxiosNormal";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [fetchUser, setFetchUser] = useState(null);
  const [axiosNormal] = useAxiosNormal();

  const isAdmin = fetchUser?.userRole;
  // const isAdmin = "admin";

  useEffect(() => {
    axiosNormal.get(`/users?email=${user?.email}`)
      .then((data) => setFetchUser(data[0]));
  }, []);

  console.log(fetchUser, fetchUser?.userRole);
  const isActiveRoute = (routePath) => {
    return location.pathname === routePath;
  };

  return (
    <div>
      {isAdmin === "admin" ? (
        <section>
          <NavBar />
          <div className="drawer lg:drawer-open flexcode-container !py-2">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center">
              {/* Page content here */}
              <div className="w-full">
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

              <div className="flexcode-banner-bg p-4 w-80 text-white py-5 rounded-lg h-screen">
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
                <ul>
                  <li>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40 mt-2"
                    >
                      <span className="inline-block h-2 w-2 rounded-full bg-teal-300"></span>
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
      ) : (
        <DashboardHome />
      )}
    </div>
  );
};

export default Dashboard;
