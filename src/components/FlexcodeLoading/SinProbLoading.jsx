import React from 'react';

const SinProbLoading = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-5 w-[80%] rounded-md'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-5'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[40%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-5'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[20%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-5'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[100%] rounded mt-2'></div>
                <div className='bg-slate-500 animate-pulse bg-opacity-50 h-2 w-[40%] rounded mt-2'></div>
            </div>
            <div className='bg-slate-500 animate-pulse bg-opacity-50 h-80 w-[100%] rounded-lg'>
                <div className='h-10 border-b border-slate-500 flex items-center gap-3 px-4'>
                    <div className='bg-slate-400 animate-bounce bg-opacity-50 h-3 w-3 rounded-full'></div>
                    <div className='bg-slate-400 animate-bounce bg-opacity-50 h-3 w-3 rounded-full'></div>
                    <div className='bg-slate-400 animate-bounce bg-opacity-50 h-3 w-3 rounded-full'></div>
                </div>
                <div className='flex flex-col gap-3 px-4 py-3'>
                    <div className='bg-slate-400 animate-pulse bg-opacity-50 h-3 w-[35%] rounded-full'></div>
                    <div className='bg-slate-400 animate-pulse bg-opacity-50 h-3 w-[15%] rounded-full'></div>
                    <div className='bg-slate-400 animate-pulse bg-opacity-50 h-3 w-[24%] rounded-full'></div>
                </div>
            </div>
        </div>
    );
};

export default SinProbLoading;