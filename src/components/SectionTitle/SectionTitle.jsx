import React from 'react';

const SectionTitle = ({ title, descrition }) => {
    return (
        <div className='mb-10'>
            <h2 className='text-3xl md:text-5xl text-center text-white font-bold'>
                {title}
            </h2>
            <p className='max-w-xl w-full text-center mx-auto mt-2 text-white'>
                {descrition}
            </p>
        </div>
    );
};

export default SectionTitle;