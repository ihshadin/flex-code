import React from 'react';
import { Link } from 'react-router-dom';

const MySubmissions = () => {
    return (
        <section className='flexcode-banner-bg pt-16 overflow-x-auto'>
            <div className='flexcode-container'>
                <div className='border-b-2 border-[#0fcda185] pb-3'>
                    <h1 className='text-white text-2xl md:text-4xl tracking-wider font-semibold'>My Submissions</h1>
                    <p className='text-slate-300 text-sm md:text-base mt-1'>Dive into a World of Problem Solving Excellence</p>
                </div>
                <div className="text-white mt-12 pb-10 md:p-10 rounded-2xl overflow-x-auto">
                    <table className="table table-pin-rows table-auto">
                        <thead>
                            <tr className='text-white border-0 bg-transparent text-sm tracking-wider'>
                                <th>Submitted Time</th>
                                <th>Question</th>
                                <th>Lavel</th>
                                <th>Status</th>
                                <th>Language</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-0 [&>*]:p-0 group'>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-l-3xl'>
                                        4 months 2 weeks ago
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap'>
                                        Two Sum
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color'>
                                        Easy
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color flex items-center gap-2'>
                                        <div className="w-3 h-3 bg-primary-color rounded-full flex-shrink-0"></div>
                                        <strong>Accepted</strong>
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-r-3xl'>
                                        JavaScript
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-0 [&>*]:p-0 group'>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-l-3xl'>
                                        4 months 2 weeks ago
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap'>
                                        Two Sum
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color'>
                                        Easy
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color flex items-center gap-2'>
                                        <div className="w-3 h-3 bg-primary-color rounded-full flex-shrink-0"></div>
                                        <strong>Accepted</strong>
                                    </div>
                                </td>
                                <td>
                                    <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-r-3xl'>
                                        JavaScript
                                    </div>
                                </td>
                            </tr>
                            {/* <tr className=''>
                                <td>4 months, 2 weeks ago</td>
                                <td>Two Sum</td>
                                <td className='text-yellow-500'>Medium</td>
                                <td className="text-success">
                                    <strong>Accepted</strong>
                                </td>
                                <td>Python</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MySubmissions;