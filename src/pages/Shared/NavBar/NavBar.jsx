import React from "react";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { user, logOut } = useContext(AuthContext);

  const isActiveRoute = (routePath) => {
    return location.pathname === routePath;
  };

  return (
    <nav className=" fixed backdrop-blur-lg top-0 left-0 z-10 w-full">
         <div className="bg-inherit py-4 lg:flex justify-between items-center px-4 lg:px-8">
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
          } lg:flex lg:w-auto mt-4 lg:mt-0`}
          id="mobile-menu"
        >
          <ul className="flex flex-col gap-3 md:gap-0  lg:text-left lg:flex-row lg:space-x-8 lg:items-center">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300 ${
                  isActiveRoute("/")
                    ? "font-bold border-b-2 pb-1 border-[#00ffc3]"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300 ${
                  isActiveRoute("/blog")
                    ? "font-bold md:border-b-2 pb-1 border-[#00ffc3]"
                    : ""
                }`}
              >
                Problems
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300 ${
                  isActiveRoute("/admission")
                    ? "font-bold md:border-b-2 pb-1 border-[#00ffc3]"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/myCollages"
                onClick={closeMenu}
                className={`text-white hover:text-gray-300 pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300 ${
                  isActiveRoute("/myCollages")
                    ? "font-bold md:border-b-2 pb-1 border-[#00ffc3]"
                    : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            {user?.email ? (
              <>
                <Link to="/profile">
                  <li className="flex items-center">
                    {user.photoURL && (
                      <img
                        className="h-8 w-8 rounded-full mr-2"
                        title={user.displayName}
                        src={user.photoURL}
                        alt=""
                      />
                    )}
                    <span className="text-white hover:text-gray-300">
                      {user.displayName}
                    </span>
                  </li>
                </Link>
                <li>
                  <button
                    onClick={logOut}
                    className="text-white font-semibold hover:text-gray-300  pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300"
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-white font-semibold hover:text-gray-300  pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="text-white font-semibold hover:text-gray-300  pb-1 hover:border-b-2 hover:border-[#00ffc3] transition-all duration-300"
                  >
                    Sign Up
                  </Link>
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
