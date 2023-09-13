import React from "react";
import PageBannerTitle from "../../../components/BannerTitle/PageBannerTitle";
import About from "../../Explore/About";

const FlexCodeAbout = () => {
  return (
    <div className="flexcode-container">
      <PageBannerTitle
        title="About Us"
        shortDesc="Who we are and what we do,"
      />
      <About />
    </div>
  );
};

export default FlexCodeAbout;
