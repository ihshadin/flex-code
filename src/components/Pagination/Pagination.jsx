import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const Pagination = ({ currentPage, totalPage, setCurrentPage }) => {

    const pageNumber = [...Array(totalPage).keys()]

    return (
        <div className="flex items-center justify-center gap-5 mt-8">
            <button onClick={() => { currentPage - 1 < totalPage && setCurrentPage(currentPage - 1) }} className={`flex items-center gap-1 py-2 px-5 border border-slate-500 rounded-xl flexcode-banner-bg ${currentPage !== 0 ? "hover:border-[#0fcda156]" : "text-slate-500 btn-disabled"}`}>
                <LiaAngleLeftSolid />
                <span className="font-medium">Previous</span>
            </button>
            <div className="hidden md:flex items-center gap-5">
                {pageNumber.map(num => <span onClick={() => setCurrentPage(num)} key={num} className={`font-semibold py-2 px-5 border rounded-xl cursor-pointer flexcode-banner-bg ${num === currentPage ? "border-[#0fcda156]" : "border-slate-500 hover:border-[#0fcda156]"}`}>{num + 1}</span>)}
            </div>
            <button onClick={() => { currentPage + 1 < totalPage && setCurrentPage(currentPage + 1) }} className={`flex items-center gap-1 py-2 px-5 border border-slate-500 rounded-xl flexcode-banner-bg ${currentPage + 1 < totalPage ? "hover:border-[#0fcda156]" : "text-slate-500 btn-disabled"}`}>
                <span className="font-medium">Next</span>
                <LiaAngleRightSolid />
            </button>
        </div>
    );
};
export default Pagination;