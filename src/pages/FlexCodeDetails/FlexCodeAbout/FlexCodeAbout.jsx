import React from "react";
import PageBannerTitle from "../../../components/BannerTitle/PageBannerTitle";
import About from "../../Explore/About";
import OurTeam from "../../Explore/OurTeam/OurTeam";


const FlexCodeAbout = () => {
  return (
    <div className="flexcode-container">
      
      <PageBannerTitle
        title="About Us"
        shortDesc="Who we are and what we do,"
      />
      <About />
      <OurTeam />
    </div>
  );
};

export default FlexCodeAbout;
