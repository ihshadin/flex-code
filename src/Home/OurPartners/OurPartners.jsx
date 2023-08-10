import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Partner from "./Partner";
import Container from "../../pages/Shared/Container/Container";
const OurPartners = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const partners = [
    { pic: "https://i.ibb.co/ScQyB8R/partner-8.png" },
    { pic: "https://i.ibb.co/K61rVW0/partner-7.png" },
    { pic: "https://i.ibb.co/pzy6SkD/partner-6.png" },
    { pic: "https://i.ibb.co/y6Yq3KH/partner-5.png" },
    { pic: "https://i.ibb.co/yhKGKVz/partner-3.png" },
    { pic: "https://i.ibb.co/1sn5Sd4/partner-4.png" },
    { pic: "https://i.ibb.co/gFfQwt3/partner-2.png" },
    { pic: "https://i.ibb.co/0ngdnmV/partner-1.png" },
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div>
      <Container>
        <h2 className="section-title">Our Partners</h2>
        <hr className="bg-black" />
        <Marquee className="mt-10 mb-40" pauseOnClick>
          {" "}
          {/* pauseOnHover */}
          {partners?.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className=" w-1/2 mx-auto"
            >
              <Partner src={partner.pic} isActive={index === activeIndex} />
            </div>
          ))}
        </Marquee>
      </Container>
    </div>
  );
};

export default OurPartners;
