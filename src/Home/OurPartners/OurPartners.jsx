import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import Partner from './Partner';
const OurPartners = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const partners = [
        {pic: "https://i.ibb.co/frq3xhh/daraz.webp"},
        {pic: "https://i.ibb.co/mJY0sKM/Unimart-Logo.webp"},
        {pic: "https://i.ibb.co/CwYcZCC/togu-mogu.webp"},
        {pic: "https://i.ibb.co/pdsq93w/shwapno.webp"},
        {pic: "https://i.ibb.co/XDJpYD0/rokomari.webp"},
        {pic: "https://i.ibb.co/BGzmB3P/panda-mart.webp"},
        {pic: "https://i.ibb.co/z28WMQp/kids-mom.webp"},
        {pic: "https://i.ibb.co/1vG4NQZ/lavander.webp"}
    ]

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
      };
    
      const handleMouseLeave = () => {
        setActiveIndex(null);
      };
    
    return (
        <div className='px-5 md:px-10'>
            <h2 className="section-title">Our Partners</h2>
            <hr className='bg-black' />
            <Marquee className='my-10' > {/* pauseOnHover */}
               
                {
                    partners?.map((partner, index) =>  <div 
                    key={index} 
                    onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
                    className='w-44 h-24 mx-3'>
                        {
                            console.log(partner.pic)
                        }
                            <Partner src={partner.pic}  isActive={index === activeIndex} />
                        </div>
                    )
                }

            </Marquee>
        </div>
    );
};

export default OurPartners;