import React from "react";
import logo from '/20230810_125620.png'
import './FlexcodeLoading.css'

const FlexcodeLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
     {/* <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
      <div className="w-32 h-20 relative ">
        <img
          src={logo} // Replace with your logo path
          alt="Logo"
          className="w-16 h-16 mx-auto grayscale animation-image transition duration-500"
        />
        <progress className="progress mt-5 w-full bg-secondary-color h-1"></progress>
        {/* <div className="overlay-jahid absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-0 transition duration-500 hover:opacity-100"></div> */}
      </div>
    </div>
  );
};

export default FlexcodeLoading;
