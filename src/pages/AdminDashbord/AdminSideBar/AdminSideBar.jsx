import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminSideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    // <div
    //   className={`bg-gray-800 text-white w-64 p-4 transform ${
    //     isOpen ? "translate-x-0" : "-translate-x-full"
    //   } transition-transform ease-in-out duration-300`}
    // >
    //   <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
    //   <button className="text-blue-500 hover:underline" onClick={toggleSidebar}>
    //     Toggle Sidebar
    //   </button>
    //   {/* Navigation links */}
    // </div>
    // ---------------------------------------------------------------

    <div className="bg-gray-800 text-white py-5 rounded-lg h-screen w-[23%]">
      <div className="mb-8">
        <div className="flex justify-center items-center mb-4">
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={user?.photoURL}
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              border: "2px solid #00ffc3",
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
            to="/manageuser"
            className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40 mt-2"
          >
            <span className="mr-2  flex">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
            </span>
            <span>Manage Users</span>
          </Link>
        </li>
        <li>
          <Link
            to="/add-blog"
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
            to="/add-problems"
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
            to="/dashboard"
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
  );
};

export default AdminSideBar;
