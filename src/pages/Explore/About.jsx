import React from 'react';
import flexImg from '../../../public/code-flex.png'

const About = () => {
    return (
        <div className='my-10 flex flexcode-banner-bg p-8 rounded-2xl shadow-2xl'>
            <div className='w-[60%]'>
                <h2 className='border-b-2 border-[#0fcda185] w-32 mb-6'>About FlexCode</h2>
                {/* <hr className='w-32 mb-8 bg-[#0fcda185]' /> */}
                <p className='mb-5 text-white tracking-wider'>FlexCode is a problem-solving platform that helps coding enthusiasts improve their skills through engaging challenges and interactive learning.FlexCode is designed for all skill levels, including beginners. Our platform provides challenges and resources that cater to both newcomers and experienced coders.We regularly update FlexCode with new challenges to keep the content fresh and engaging. You can expect new challenges to be added on a weekly basis, offering you a continuous learning experience.FlexCode encourages collaboration among users. You can team up with others, tackle challenges together, and even join coding communities to learn and grow with fellow enthusiasts.</p>
                <p className='font-bold'>Technologies we've working with :</p>
                <div className='grid grid-cols-3 mt-4'>
                    <div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-orange-400 mr-2"></span>
                            <span>HTML</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                            <span>CSS</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-blue-300 mr-2"></span>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-red-400 mr-2"></span>
                            <span>Javascript</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-[#0fcda1] mr-2"></span>
                            <span>React</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-blue-400 mr-2"></span>
                            <span>Daisyui</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-orange-600 mr-2"></span>
                            <span>Express</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-red-300 mr-2"></span>
                            <span>Node.js</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="inline-block h-3 w-3 rounded-full bg-teal-400 mr-2"></span>
                            <span>Mongoose</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[40%] flex justify-center items-center'>
                <img className='w-48 h-48' src={flexImg} alt="" />
            </div>
        </div>
    );
};

export default About;