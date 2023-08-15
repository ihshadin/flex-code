import React from 'react';
import IconBox from '../IconBox/IconBox';
import image1 from '../../../public/image-1.jpg'

// CSS connect
import './ExploreUs.css'

const ExploreUs = () => {
    return (
        <div className='py-12 md:py-16 lg:py-32 flex flex-col md:flex-row gap-20 items-center'>
            <div className='md:w-1/2 text-right text-white'>
                <div className='flex gap-10 justify-end items-center'>
                    <h2 className='text-3xl font-bold'>Start Exploring</h2>
                    <IconBox />
                </div>
                <p className='mt-2 md:mt-4'>
                    Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.
                </p>
                <button className='bg-primary-color text-black py-2 px-5 text-lg rounded-md font-medium mt-3 md:mt-5 ms-auto block'>View Details</button>
            </div>
            <div className='md:w-1/2'>
                <img className='w-[300px] h-[400px] object-cover rounded-lg mx-auto explore-animation' src={image1} alt="" />
            </div>
        </div>
    );
};

export default ExploreUs;