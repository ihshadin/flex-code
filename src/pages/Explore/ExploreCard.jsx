import { FaShieldAlt } from "react-icons/fa";
import './Explore.css';
import { Link } from "react-router-dom";

const ExploreCard = ({ technology }) => {
    const { image, title, description, _id } = technology;
    return (
        <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-slate-500 hover:border-[#0fcda156] transition-all exploreCard cursor-pointer">
            <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#0fcda1]"><FaShieldAlt /> Problem</p>
            <h1 className="text-xl text-white font-semibold tracking-wider">{title}</h1>
            <p className="text-sm text-gray-400 mt-1 tracking-wider">{description.length > 180 ? description.slice(0, 180) + "..." : description}</p>
            <Link to={`/explore/${_id}`} className="text-sm transition-all duration-300 primary-color ms-auto mt-auto tracking-wider btn-effect">
                Read More
            </Link>
        </div>
    );
};
export default ExploreCard;