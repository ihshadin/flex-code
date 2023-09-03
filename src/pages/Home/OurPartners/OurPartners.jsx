import React from "react";
import Marquee from "react-fast-marquee";
import './Partner.css'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurPartners = () => {
  const partners = [
    { pic: "https://i.ibb.co/K61rVW0/partner-7.png" },
    { pic: "https://i.ibb.co/pzy6SkD/partner-6.png" },
    { pic: "https://i.ibb.co/y6Yq3KH/partner-5.png" },
    { pic: "https://i.ibb.co/pzy6SkD/partner-6.png" },
    { pic: "https://i.ibb.co/GTTnfFF/40-404470-blavity-logo-architecture.png" },
    { pic: "https://i.ibb.co/tJGx7rL/amazon.png" },
    { pic: "https://i.ibb.co/GphCd3d/aribnb.png" },
    { pic: "https://i.ibb.co/J3m17my/google-white-logo.png" },
    { pic: "https://i.ibb.co/71zKRJZ/Intel-Symbol.png" },
    { pic: "https://i.ibb.co/4KZRMw7/netflix.png" },
    { pic: "https://i.ibb.co/2PGzFMy/tesla.png" },
    { pic: "https://i.ibb.co/Z8CTvFW/uber.png" },
  ];
  return (
    <section className="">
      <div className="flexcode-container">
        <SectionTitle
          title="Our Partners"
          descrition="Powerful Partnerships: Achieving Excellence Together with Industry Leaders."
        />
        <Marquee
          pauseOnClick
          speed={100}
          gradient={true}
          gradientColor={[23, 24, 27]}
          children={null}
          className="grayscale"
        >
          {partners?.map((partner, index) => (
            <img key={index} src={partner.pic} className="w-1/2 opacity-50" />
          ))}
        </Marquee>
        <Marquee
          pauseOnClick
          speed={100}
          gradient={true}
          gradientColor={[23, 24, 27]}
          children={null}
          className="grayscale mt-5 md:mt-10"
          direction="right"
        >
          {partners?.map((partner, index) => (
            <img key={index} src={partner.pic} className="w-1/2 opacity-50" />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurPartners;
