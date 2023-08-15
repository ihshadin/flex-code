import React from 'react';

const SolvedProblems = () => {
    return (
        <div className="bg-[#1e2d40] rounded-lg min-h-[186px] w-full pt-4 pb-3 lc-xl:h-[186px]" style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 6px 12px" }}>
            <div className="px-[13px] text-xs font-medium text-white dark:text-dark-label-3">Solved Problems</div>
            <div className="mx-3 flex items-center lc-xl:mx-8">
                <div className="mr-8 mt-6 flex min-w-[100px] justify-center">
                    <div className="shrink-1 relative max-h-[100px] max-w-[100px] z-base">
                        {/* SVG code for the circle */}
                        <svg className="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                            <circle fill="none" cx="50" cy="50" r="46" strokeWidth="3" strokeLinecap="round" stroke="#0fcda1" className="w-[100px] text-gray-4 dark:text-dark-gray-4"></circle>
                            <circle fill="none" cx="50" cy="50" r="46" strokeWidth="5" strokeLinecap="round" stroke="#0fcda1" className="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]" strokeDasharray="0.10256441594402448 288.92395971431694" strokeDashoffset="0" data-difficulty="ALL">
                            </circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                            <div>
                                <div className="text-[24px] font-medium text-white dark:text-dark-label-1">0</div>
                                <div className="whitespace-nowrap text-xs text-slate-300 dark:text-dark-label-3">Solved</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col space-y-4 lc-xl:max-w-[228px]">
                    {/* Easy section added */}
                    <div className="space-y-2">
                        <div className="flex w-full items-end text-xs">
                            <div className="w-[53px] text-white dark:text-dark-label-3">Easy</div>
                            <div className="flex flex-1 items-center">
                                <span className="mr-[5px] text-slate-200 font-medium leading-[20px] text-label-1 dark:text-dark-label-1">1</span>
                                <span className="text-xs font-medium text-slate-300 dark:text-dark-label-4">/706</span>
                            </div>
                            <div className="lc-lg:hidden lc-xl:inline text-white dark:text-dark-label-3">
                                <span className="text-slate-300 dark:text-dark-label-4">Not enough data</span>
                            </div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                            <div className="absolute h-full w-full bg-green-1 dark:bg-dark-green-1"></div>
                            <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive" style={{ width: "0.141643%" }}></div>
                        </div>
                    </div>
                    {/* Medium section */}
                    <div className="space-y-2">
                        <div className="flex w-full items-end text-xs">
                            <div className="w-[53px] text-white dark:text-dark-label-3">Medium</div>
                            <div className="flex flex-1 items-center">
                                <span className="mr-[5px] text-slate-200 font-medium leading-[20px] text-label-1 dark:text-dark-label-1">0</span>
                                <span className="text-xs font-medium text-slate-300 dark:text-dark-label-4">/1492</span>
                            </div>
                            <div className="lc-lg:hidden lc-xl:inline text-white dark:text-dark-label-3">
                                <span className="text-slate-300 dark:text-dark-label-4">Not enough data</span>
                            </div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                            <div className="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1"></div>
                            <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow" style={{ width: "0%" }}></div>
                        </div>
                    </div>
                    {/* Hard section */}
                    <div className="space-y-2">
                        <div className="flex w-full items-end text-xs">
                            <div className="w-[53px] text-white dark:text-dark-label-3">Hard</div>
                            <div className="flex flex-1 items-center">
                                <span className="mr-[5px] text-slate-200 font-medium leading-[20px] text-label-1 dark:text-dark-label-1">0</span>
                                <span className="text-xs font-medium text-slate-300 dark:text-dark-label-4">/620</span>
                            </div>
                            <div className="lc-lg:hidden lc-xl:inline text-white dark:text-dark-label-3">
                                <span className="text-slate-300 dark:text-dark-label-4">Not enough data</span>
                            </div>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full max-w-none">
                            <div className="absolute h-full w-full bg-red-1 dark:bg-dark-red-1"></div>
                            <div className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s" style={{ width: "0%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolvedProblems;