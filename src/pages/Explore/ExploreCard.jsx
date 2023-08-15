import { FaShieldAlt } from "react-icons/fa";
import './Explore.css';


const ExploreCard = ({ explore }) => {
    const { title, desc, link } = explore;
    return (
        <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#00ffc3] transition-all exploreCard drop-shadow-md cursor-pointer">
            <p className="flex gap-2 text-[0.85rem] tracking-wide font-thin items-center text-[#00ffc3]"><FaShieldAlt /> Problem</p>
            <h1 className="text-[1.2rem] text-white font-semibold tracking-wider">{title}</h1>
            <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">{desc}</p>
            <a className="text-[0.9rem] mt-6 hover:underline text-gray-400 tracking-wider" href={link}>flexCode.com</a>
        </div>
    );
};
export default ExploreCard;