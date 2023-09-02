import { FaShieldAlt } from "react-icons/fa";
import './Explore.css';
import { Link } from "react-router-dom";


const ExploreCard = ({ explore }) => {
    const { title, desc, _id } = explore;
    return (
        <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#0fcda1] transition-all exploreCard drop-shadow-md cursor-pointer">
            <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]"><FaShieldAlt /> Problem</p>
            <h1 className="text-[1.2rem] text-white font-semibold tracking-wider">{title}</h1>
            <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">{desc.length > 180 ? desc.slice(0, 180) + "..." : desc}</p>
            <Link to={`/exploreDetails/${_id}`} className="text-sm transition-all duration-300 primary-color ms-auto mt-auto tracking-wider btn-effect">
                Read More
            </Link>
        </div>
    );
};
export default ExploreCard;