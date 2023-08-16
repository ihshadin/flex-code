import React from "react";
import Marquee from "react-fast-marquee";
import './Partner.css'

const OurPartners = () => {
  const partners = [
    { pic: "https://i.ibb.co/ScQyB8R/partner-8.png" },
    { pic: "https://i.ibb.co/K61rVW0/partner-7.png" },
    { pic: "https://i.ibb.co/pzy6SkD/partner-6.png" },
    { pic: "https://i.ibb.co/y6Yq3KH/partner-5.png" },
    { pic: "https://i.ibb.co/yhKGKVz/partner-3.png" },
    { pic: "https://i.ibb.co/1sn5Sd4/partner-4.png" },
    { pic: "https://i.ibb.co/pzy6SkD/partner-6.png" },
    { pic: "https://i.ibb.co/gFfQwt3/partner-2.png" },
  ];
  return (
    <div className="flexcode-container">
      <Marquee
        pauseOnClick
        speed={200}
        gradient={true}
        gradientColor={[23, 24, 27]}
        children={null}
        className="grayscale"
      >
        {partners?.map((partner, index) => (
          <img key={index} src={partner.pic} className="w-1/2" />
        ))}
      </Marquee>
    </div>
  );
};

export default OurPartners;
