import React from 'react';
import IconBox from '../../../components/IconBox/IconBox';
import image1 from '../../../../public/image-1.jpg'

// CSS connect
import './ExploreUs.css'
import { FaShieldAlt } from 'react-icons/fa';

const ExploreUs = () => {
    return (
        <section>
            <div className='flexcode-container'>
                <div>
                    <h2 className='text-3xl md:text-5xl text-center text-white font-bold'>
                        Explore solutions.
                    </h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10 text-white'>Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
                </div>
                <div className='grid grid-cols-3 gap-5 my-10'>
                    <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#0fcda1] transition-all exploreCard drop-shadow-md cursor-pointer">
                        <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]">
                            <FaShieldAlt />
                            Problem
                        </p>
                        <h1 className="text-[1.2rem] text-white font-semibold tracking-wider">
                            React
                        </h1>
                        <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
                            A compilation of advanced React concepts.
                        </p>
                        <a className="text-[0.9rem] mt-6 hover:underline text-gray-400 tracking-wider" href="#">
                            flexCode.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#0fcda1] transition-all exploreCard drop-shadow-md cursor-pointer">
                        <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]">
                            <FaShieldAlt />
                            Problem
                        </p>
                        <h1 className="text-[1.2rem] text-white font-semibold tracking-wider">
                            React
                        </h1>
                        <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
                            A compilation of advanced React concepts.
                        </p>
                        <a className="text-[0.9rem] mt-6 hover:underline text-gray-400 tracking-wider" href="#">
                            flexCode.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#0fcda1] transition-all exploreCard drop-shadow-md cursor-pointer">
                        <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]">
                            <FaShieldAlt />
                            Problem
                        </p>
                        <h1 className="text-[1.2rem] text-white font-semibold tracking-wider">
                            React
                        </h1>
                        <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
                            A compilation of advanced React concepts.
                        </p>
                        <a className="text-[0.9rem] mt-6 hover:underline text-gray-400 tracking-wider" href="#">
                            flexCode.com
                        </a>
                    </div>
                </div>
                <button className='bg-primary-color text-black py-2 px-5 text-lg rounded-md font-medium mt-3 md:mt-5 mx-auto block'>
                    Explore All
                </button>
            </div>
            {/* <div className='flexcode-container flex flex-col md:flex-row gap-20 items-center'>
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
            </div> */}
        </section>
    );
};

export default ExploreUs;