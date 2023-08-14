import React from 'react';

const Partner = ({ src, alt, isActive }) => {
  const imageStyle = {
    // filter: isActive ? 'none' : 'grayscale(100%)',
    // Add other styling as needed
  };

  return <img src={src} alt={alt} style={imageStyle} className=' block w-1/2 mx-auto  h-full' />;
};

export default Partner;