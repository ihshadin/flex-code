import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Partner from "./Partner";
import './Partner.css'
import Container from "../../Shared/Container/Container";
const OurPartners = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="flex-container">
      <Marquee
        pauseOnClick
        speed={200}
        gradient={true}
        gradientColor={[23, 24, 27]}>
        {" "}
        {/* pauseOnHover */}
        {partners?.map((partner, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className=" "
          >
            <Partner src={partner.pic} isActive={index === activeIndex} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default OurPartners;
