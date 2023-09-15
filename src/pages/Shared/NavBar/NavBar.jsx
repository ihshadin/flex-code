import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCrown, FaUser } from "react-icons/fa";
import { VscSignIn } from "react-icons/vsc";
import "./NavBar.css";
import { toast } from "react-hot-toast";
import useFlexUser from "../../../Hooks/useFlexUser";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import premiumlogo from "/premiumlogo.png";
import normallogo from "/20230810_125620.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const { user, logOut } = useAuth();
  const [flexUser] = useFlexUser();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const from = location.state?.from?.pathname || "/";

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveRoute = (routePath) => {
    return location.pathname === routePath;
  };

  const handleSignOut = () => {
    logOut().then(() => {
      toast.success("LogOut Successfull!");
      flexUser.isPremium = null;
      navigate(from, { replace: true });
    });
  };

  const handleUserClick = () => {
    setUserClicked(!userClicked);
  };

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <nav
      className={`top-0 backdrop-blur-sm z-10 w-full fixed ${
        location.pathname === "/" || location.pathname === "/my-submittions"
          ? "md:fixed"
          : "md:sticky"
      }`}
    >
      {/* set Premium logo in halmate  */}
      {flexUser?.isPremium ? (
          <Helmet>
            <title>Flex-Code Premium</title>
            <link rel="icon" href={premiumlogo} />
          </Helmet>
        ) : (
          <Helmet>
            <link rel="icon" href={normallogo} />
          </Helmet>
        )}
      <div className="relative max-w-[1280px] w-full mx-auto bg-inherit py-2 px-3 lg:flex justify-between items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-semibold">
            <div className="flex items-center gap-1">
              <img
                className="w-[8rem] md:w-[10rem]"
                src="/flex-codelogo.png"
                alt="logo"
              />
            </div>
          </Link>
          <div className="ml-3 lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 focus:outline-none transition-opacity duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              style={{ opacity: isMenuOpen ? 0.5 : 1 }}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:w-auto mt-4 lg:mt-0 flexcode-menu-animation  transition-all duration-300 `}
            id="mobile-menu"
          >
            <ul className="flex flex-col gap-3 md:gap-8 md:mt-[1.5px] lg:text-left lg:flex-row lg:items-center">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`text-white hover:text-gray-300 pb-1 nav-effect${
                    isActiveRoute("/")
                      ? "font-bold border-b-2 pb-[1.9px] border-[#0fcda1]"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/problems"
                  onClick={closeMenu}
                  className={`text-white hover:text-gray-300 pb-1 nav-effect${
                    isActiveRoute("/problems")
                      ? "font-bold border-b-2 pb-[1.9px] border-[#0fcda1]"
                      : ""
                  }`}
                >
                  Problems
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={closeMenu}
                  className={`text-white hover:text-gray-300 pb-1 nav-effect${
                    isActiveRoute("/blog")
                      ? "font-bold border-b-2 pb-[1.9px] border-[#0fcda1]"
                      : ""
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  onClick={closeMenu}
                  className={`text-white hover:text-gray-300 pb-1 nav-effect${
                    isActiveRoute("/explore")
                      ? "font-bold border-b-2 pb-[1.9px] border-[#0fcda1]"
                      : ""
                  }`}
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/playground"
                  onClick={closeMenu}
                  className={`text-white hover:text-gray-300 pb-1 nav-effect${
                    isActiveRoute("/playground")
                      ? "font-bold border-b-2 pb-[1.9px] border-[#0fcda1]"
                      : ""
                  }`}
                >
                  PlayGround
                </Link>
              </li>
              {!flexUser?.isPremium && (
                <li>
                  <Link
                    to="/subscribe"
                    onClick={closeMenu}
                    className={`text-white pb-1`}
                  >
                    <button className="md:-mr-5 py-1 px-5 border border-[#ffbc2ab5] rounded-lg font-medium flex items-center gap-1">
                      <FaCrown className="text-[#ffbc2a]" /> Upgrade
                    </button>
                  </Link>
                </li>
              )}

              {user?.email ? (
                <li className="absolute top-3 md:top-auto right-14 md:right-auto md:relative">
                  <button
                    ref={dropdownRef}
                    onClick={handleUserClick}
                    className={`flex items-center ${
                      userClicked ? "text-gray-300" : "text-white"
                    }`}
                  >
                    {user?.photoURL ? (
                      <>
                        <img
                          className={`h-9 w-9 rounded-full ${
                            userClicked
                              ? "border-2 border-[#0fcda1]"
                              : "border-2 border-transparent"
                          } `}
                          title={user?.displayName}
                          src={user?.photoURL}
                          alt=""
                        />
                      </>
                    ) : (
                      <FaUser
                        className={`h-8 w-8 rounded-full p-1 ${
                          userClicked
                            ? "border-2 border-[#0fcda1]"
                            : "border-2 border-white"
                        } `}
                        title={user?.displayName}
                      ></FaUser>
                    )}
                  </button>

                  {/* start user dropdown  */}
                  {user?.email && (
                    <div
                      className={`absolute -right-8 md:right-0 mt-2 z-10 flexcode-dropdown-animation ${
                        userClicked ? "block" : "hidden"
                      }`}
                    >
                      <div className="bg-[#1e2d40] bg-opacity-95 transition-all duration-700 w-[18rem] py-2 rounded-md shadow-md overflow-hidden">
                        <div className="px-4 py-2">
                          <div className="flex items-center">
                            {user.photoURL ? (
                              <img
                                className="h-10 w-10 rounded-full mr-2"
                                src={user?.photoURL}
                              />
                            ) : (
                              <FaUser
                                className={`h-8 w-8 rounded-full p-1 border-2 border-[#00ffc3] mr-2`}
                              ></FaUser>
                            )}

                            <div>
                              <p className="text-white font-medium">
                                {user?.displayName}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-dark-label-3 w-[15rem] overflow-hidden">
                                {user?.email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-[#0fcda1] ">
                          <Link
                            to="/my-playground"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40 mt-2"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                            </span>
                            <span>My PlayGround</span>
                          </Link>
                          <Link
                            to="/profile"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                            </span>
                            <span>Profile</span>
                          </Link>
                          <Link
                            to="/leader-board"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-blue-300"></span>
                            </span>
                            <span>Leader Board</span>
                          </Link>
                          <Link
                            to="/notebooks"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-teal-400"></span>
                            </span>
                            <span>Notebooks</span>
                          </Link>
                          <Link
                            to="/my-submittions"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-blue-300"></span>
                            </span>
                            <span>Submissions</span>
                          </Link>
                          <Link
                            to="/dashboard"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                            </span>
                            <span>Dashboard</span>
                          </Link>
                          <button
                            onClick={handleSignOut}
                            className="w-full flex items-center text-left px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-30 mb-4"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-[#0fcda1]"></span>
                            </span>
                            <span>Log Out</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* end user dropdown  */}
                </li>
              ) : (
                <>
                  <li className="absolute top-3 md:top-auto right-14 md:right-auto md:relative">
                    <button
                      ref={dropdownRef}
                      onClick={handleUserClick}
                      className={`flex items-center ${
                        userClicked ? "text-gray-300" : "text-white"
                      }`}
                    >
                      <VscSignIn
                        className={`h-8 w-8 rounded-full p-1 ${
                          userClicked ? "border-2 border-[#0fcda1]" : ""
                        } `}
                        title={user?.displayName}
                      />
                    </button>
                    <div
                      className={`absolute -right-8 md:right-0 mt-2 z-10 flexcode-dropdown-animation ${
                        userClicked ? "block" : "hidden"
                      }`}
                    >
                      <div className="bg-[#1e2d40] bg-opacity-95 backdrop-blur-sm transition-all duration-700 w-[10rem] py-2 rounded-md shadow-md overflow-hidden">
                        <div>
                          <Link
                            to="/login"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
                            </span>
                            <span>Sign In</span>
                          </Link>
                          <Link
                            to="/signup"
                            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                          >
                            <span className="mr-2  flex">
                              <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span>Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
