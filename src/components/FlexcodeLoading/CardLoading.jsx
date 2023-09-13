import React from 'react';

const CardLoading = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <div className="flexcode-banner-bg flex flex-row items-center justify-between border border-slate-500 animate-pulse px-5 py-6 rounded-xl">
                <div>
                    <h1 className="text-base bg-slate-700  animate-pulse w-36 md:w-72 h-4 md:h-5 mb-2 md:mb-5 text-white font-semibold">
                    </h1>
                    <div className="flex items-center gap-2 md:gap-5">
                        <p className="text-xs bg-slate-700  animate-pulse w-16 md:w-32 h-3 text-gray-400 tracking-wider">
                        </p>
                        <p className="text-xs bg-slate-700  animate-pulse w-16 md:w-32 h-3 text-gray-400 tracking-wider">
                        </p>
                    </div>
                </div>
                <span className="text-xs bg-slate-700  animate-pulse w-20 md:w-40 h-5 md:h-8 py-2 px-3">
                </span>
            </div>
            <div className="flexcode-banner-bg hidden md:flex flex-row items-center justify-between border border-slate-500 px-5 py-6 rounded-xl">
                <div>
                    <h1 className="text-base bg-slate-700 animate-pulse w-36 md:w-72 h-4 md:h-5 mb-2 md:mb-5 text-white font-semibold">
                    </h1>
                    <div className="flex items-center gap-2 md:gap-5">
                        <p className="text-xs bg-slate-700 animate-pulse w-16 md:w-32 h-3 text-gray-400 tracking-wider">
                        </p>
                        <p className="text-xs bg-slate-700 animate-pulse w-16 md:w-32 h-3 text-gray-400 tracking-wider">
                        </p>
                    </div>
                </div>
                <span className="text-xs bg-slate-700 animate-pulse w-20 md:w-40 h-5 md:h-8 py-2 px-3">
                </span>
            </div>
        </div>
    );
};

export default CardLoading;