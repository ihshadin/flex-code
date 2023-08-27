import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import FlexcodeLoading from '../../../components/FlexcodeLoading/FlexcodeLoading';

const SolvedProblems = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [allProblems, setAllProblems] = useState([]);
    const [mySolvedProblems, setMySolvedProblems] = useState([])

    // Loading
    // if (loading) {
    //     return <progress className="progress w-56"></progress>;
    // }

    // Total Problems by level
    const easyProblems = allProblems.filter(problem => problem.level === 'easy')
    const mediumProblems = allProblems.filter(problem => problem.level === 'medium')
    const difficultProblems = allProblems.filter(problem => problem.level === 'difficult')

    // Solved Problems by level
    const solvedEasyProblems = mySolvedProblems.filter(problem => problem.level === 'easy');
    const solvedMediumProblems = mySolvedProblems.filter(problem => problem.level === 'medium');
    const solvedDifficultProblems = mySolvedProblems.filter(problem => problem.level === 'difficult');

    // Percentage for problems
    const percentageSolvedEasy = (solvedEasyProblems.length / easyProblems.length) * 100
    const percentageSolvedMedium = (solvedMediumProblems.length / mediumProblems.length) * 100
    const percentageSolvedDifficult = (solvedDifficultProblems.length / difficultProblems.length) * 100

    // Cirlce
    const percentageToShow = (mySolvedProblems.length / allProblems.length) * 100
    const circumference = 2 * Math.PI * 46;
    const dashArray = (circumference * percentageToShow) / 100;

    useEffect(() => {
        axios.get('./problems.json')
            .then(data => {
                setAllProblems(data.data);
                // setLoading(false)
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/solvedProblems/userSolveProblem?email=${user?.email}`)
            .then(data => {
                setMySolvedProblems(data.data);
                // setLoading(false)
            })
    }, [user?.email])


    return (
        <div className="bg-[#1e2d40] rounded-lg min-h-[186px] w-full pt-4 pb-3 lc-xl:h-[186px]" style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 6px 12px" }}>
            <div className="px-[13px] text-xs font-medium text-white dark:text-dark-label-3">Solved Problems</div>
            <div className="mx-3 flex items-center lc-xl:mx-8">
                <div className="mr-8 mt-6 flex min-w-[100px] justify-center">
                    <div className="group transition-all shrink-1 relative max-h-[100px] max-w-[100px] z-base">
                        {/* SVG code for the circle */}
                        <svg className="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                            <circle fill="none" cx="50" cy="50" r="46" strokeWidth="3" strokeLinecap="round" stroke="#ffffff" className="w-[100px] text-gray-4"></circle>
                            <circle fill="none" cx="50" cy="50" r="46"
                                strokeWidth="3"
                                strokeLinecap="round"
                                stroke="#0fcda1"
                                className="cursor-pointer text-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                                strokeDasharray={`${dashArray} ${circumference}`}
                                strokeDashoffset="0"
                                data-difficulty="ALL">
                            </circle>
                        </svg>
                        <div className="opacity-100 group-hover:opacity-0 duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                            <div>
                                <div className="text-2xl font-medium text-white dark:text-dark-label-1">{mySolvedProblems.length}</div>
                                <div className="whitespace-nowrap text-xs text-slate-300 dark:text-dark-label-3">Solved</div>
                            </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                            <div>
                                <div className="text-xl font-medium text-white dark:text-dark-label-1">{percentageToShow.toFixed(1)}%</div>
                                <div className="whitespace-nowrap text-xs text-slate-300 dark:text-dark-label-3">Solved</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col space-y-4 lc-xl:max-w-[228px]">
                    {/* Easy section added */}
                    <div className="space-y-2">
                        <div className="flex w-full items-end text-xs">
                            <div className="w-[65px] text-white dark:text-dark-label-3">Easy</div>
                            <div className="flex flex-1 items-center">
                                <span className="mr-[5px] text-slate-200 font-medium leading-[20px] text-label-1 dark:text-dark-label-1">{solvedEasyProblems.length}</span>
                                <span className="text-xs font-medium text-slate-300 dark:text-dark-label-4">/ {easyProblems.length}</span>
                            </div>
                            <div className="lc-lg:hidden lc-xl:inline text-white dark:text-dark-label-3">
                                <span className="text-slate-300 dark:text-dark-label-4">Not enough data</span>
                            </div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                            <div className="absolute h-full w-full bg-[#0fcda133]"></div>
                            <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-[#0fcda1]" style={{ width: `${percentageSolvedEasy}%` }}></div>
                        </div>
                    </div>
                    {/* Medium section */}
                    <div className="space-y-2">
                        <div className="flex w-full items-end text-xs">
                            <div className="w-[65px] text-white dark:text-dark-label-3">Medium</div>
                            <div className="flex flex-1 items-center">
                                <span className="mr-[5px] text-slate-200 font-medium leading-[20px] text-label-1 dark:text-dark-label-1">{solvedMediumProblems.length}</span>
                                <span className="text-xs font-medium text-slate-300 dark:text-dark-label-4">/ {mediumProblems.length}</span>
                            </div>
                            <div className="lc-lg:hidden lc-xl:inline text-white dark:text-dark-label-3">
                                <span className="text-slate-300 dark:text-dark-label-4">Not enough data</span>
                            </div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                            <div className="absolute h-full w-full bg-yellow-500 bg-opacity-20"></div>
                            <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow-500" style={{ width: `${percentageSolvedMedium}%` }}></div>
                        </div>
                    </div>
                    {/* Hard section */}
                    <div className="space-y-2">
                        <div className="flex w-full items-end text-xs">
                            <div className="w-[65px] text-white dark:text-dark-label-3">Hard</div>
                            <div className="flex flex-1 items-center">
                                <span className="mr-[5px] text-slate-200 font-medium leading-[20px] text-label-1 dark:text-dark-label-1">{solvedDifficultProblems.length}</span>
                                <span className="text-xs font-medium text-slate-300 dark:text-dark-label-4">/ {difficultProblems.length}</span>
                            </div>
                            <div className="lc-lg:hidden lc-xl:inline text-white dark:text-dark-label-3">
                                <span className="text-slate-300 dark:text-dark-label-4">Not enough data</span>
                            </div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                            <div className="absolute h-full w-full bg-red-500 bg-opacity-20"></div>
                            <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-500" style={{ width: `${percentageSolvedDifficult}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolvedProblems;