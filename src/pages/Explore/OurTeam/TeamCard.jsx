import React from 'react';

const TeamCard = ({ imgLink, name, title, index }) => {
    return (
        <div className='text-center polygon-parent w-full'>
            <div className='h-40 w-full md:w-40 mx-auto'>
                <span className={`polygon-shadow polygon-animate animate-delay-${index}s`}>
                    <img className='img-polygon cursor-pointer mx-auto h-40 w-40 object-cover' src={imgLink} alt="" />
                </span>
            </div>
            <h1 className='text-2xl font-bold tracking-wider mt-5'>{name}</h1>
            <h5 className='text-base font-semibold text-gray-400'>{title}</h5>
        </div>
    );
};

export default TeamCard;