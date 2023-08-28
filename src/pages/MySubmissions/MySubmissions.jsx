import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { AuthContext } from '../../providers/AuthProvider';

const MySubmissions = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [mySolvedProblems, setMySolvedProblems] = useState([]);
    const [dateDifferences, setDateDifferences] = useState([]);

    function formatDateDifference(solvedDate) {
        const currentDate = new Date();
        const solvedDateObj = new Date(solvedDate);
        const timeDifference = currentDate - solvedDateObj;

        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const millisecondsPerMonth = 30 * millisecondsPerDay;
        const millisecondsPerYear = 365 * millisecondsPerDay;

        const years = Math.floor(timeDifference / millisecondsPerYear);
        const months = Math.floor((timeDifference % millisecondsPerYear) / millisecondsPerMonth);
        const days = Math.floor((timeDifference % millisecondsPerMonth) / millisecondsPerDay);

        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        }

        return 'Today';
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/solvedProblems/userSolveProblem?email=${user?.email}`)
            .then(data => {
                setMySolvedProblems(data.data);
            })
    }, [user?.email])

    useEffect(() => {
        const calculateDateDifferences = () => {
            const formattedDifferences = mySolvedProblems.map((problem) => {
                const dateDifference = formatDateDifference(problem.date);
                return { _id: problem._id, dateDifference };
            });

            setDateDifferences(formattedDifferences);
        };

        calculateDateDifferences();
    }, [mySolvedProblems]);

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
                            {
                                mySolvedProblems.map((problem) => (
                                    <tr className='border-0 [&>*]:p-0 group'>
                                        <td>
                                            <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-l-3xl'>
                                                {formatDateDifference(problem.date)}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap'>
                                                {problem.title}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color capitalize'>
                                                {problem.level}
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
                                                {problem.language}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* <tr className='border-0 [&>*]:p-0 group'>
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
                            </tr> */}
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
                {/* <div className='overflow-x-auto'>
                    <div className='flex justify-between whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl'>
                        <h3 className='font-semibold w-[30%]'>Submitted Time</h3>
                        <h3 className='font-semibold w-[30%]'>Question</h3>
                        <h3 className='font-semibold w-[20%]'>Level</h3>
                        <h3 className='font-semibold w-[25%]'>Status</h3>
                        <h3 className='font-semibold w-[25%]'>Language</h3>
                    </div>
                    <div className='flex justify-between whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl'>
                        <p className='w-[30%]'>3 Months 22 Days ago</p>
                        <p className='w-[30%]'>Two Sum</p>
                        <p className='w-[20%]'>Easy</p>
                        <p className='w-[25%]'>Accepted</p>
                        <p className='w-[25%]'>JavaScript</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default MySubmissions;