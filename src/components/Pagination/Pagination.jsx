const Pagination = ({currentPage, totalPage, setCurrentPage}) => {

    const pageNumber = [...Array(totalPage).keys()]

return (
<div>
    {/* Component */}
<div className="flex items-center justify-center pb-10 lg:px-0 sm:px-6 px-4">

        <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
            <div onClick={() => { currentPage - 1 < totalPage && setCurrentPage(currentPage - 1) }} className={`${currentPage !== 0 ? "hover:text-[#00ffc3]" : "opacity-75 text-gray-600 btn-disabled"} flex items-center pt-3 text-gray-400 cursor-pointer`}>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-md ml-3 font-medium leading-none ">Previous</p>                    
            </div>
            <div className="sm:flex hidden">
{/*             <p className="text-md font-medium leading-none cursor-pointer text-[#00ffc3] border-t border-[#00ffc3]  pt-3 mr-4 px-2">4</p> */}

              {pageNumber.map(num =>  <p onClick={() => setCurrentPage(num)} key={num} className={ `text-md font-medium leading-none cursor-pointer hover:text-[#00ffc3] border-t  ${num === currentPage ? "border-[#00ffc3] text-[#00ffc3]" : "border-transparent text-gray-400 hover:border-[#00ffc3]"} pt-3 mr-4 px-2`}>{num + 1}</p>)} 
               
            </div>
            <div onClick={() => { currentPage + 1 < totalPage && setCurrentPage(currentPage + 1) }} className={` ${currentPage + 1 < totalPage ? "text-gray-400 hover:text-[#00ffc3]" : "opacity-75 btn-disabled text-gray-600"} flex items-center pt-3 hover:text-[#00ffc3] cursor-pointer`}>
                <p className="text-md font-medium leading-none mr-3">Next</p>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
            </div>
        </div>
    </div>
</div>
);
};
export default Pagination;