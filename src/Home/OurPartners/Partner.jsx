import React from 'react';

const Partner = ({ src, alt, isActive }) => {
  const imageStyle = {
    filter: isActive ? 'none' : 'grayscale(100%)',
    // Add other styling as needed
  };

  return <img src={src} alt={alt} style={imageStyle} className='w-full h-full' />;
};

export default Partner;