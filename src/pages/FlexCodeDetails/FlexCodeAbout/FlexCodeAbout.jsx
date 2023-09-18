import React from "react";
import PageBannerTitle from "../../../components/BannerTitle/PageBannerTitle";
import About from "../../Explore/About";
import OurTeam from "../../Explore/OurTeam/OurTeam";
import { Helmet } from "react-helmet";


const FlexCodeAbout = () => {
  return (
    <div className="flexcode-container">
      <Helmet title='Flex Code | About Us '/>
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
