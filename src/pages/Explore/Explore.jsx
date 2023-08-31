import { useNavigation } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import ExploreCard from "./ExploreCard";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import About from "./About";
import { useEffect, useState } from "react";

const Explore = () => {

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <FlexcodeLoading />;
    }

    const [exploreCards, setExploreCards] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/exploreDetails')
            .then(res => res.json())
            .then(data => {
                setExploreCards(data)
            })
    }, [])

    return (
        <section>
            <div className="flexcode-container">
                <h1 className="text-6xl text-white font-bold">Explore</h1>
                <p className="text-xl text-white mt-5 tracking-wider">The best place for problem solving with exploring smart contracts <br /> from world-class companies problems — unlock the power of problem solving with <span className="text-[#0fcda1]">Flex Code</span>.</p>
                <About></About>
                <div className="my-16">
                    <h1 className="text-2xl text-white font-semibold">Popular</h1>
                    <p className="text-md text-white mt-1 tracking-wider">A collection of most popular problems.</p>
                    <div className="grid grid-cols-3 gap-5 my-10">
                        {
                            exploreCards?.map((explore, index) => <ExploreCard key={index} explore={explore} />)
                        }
                    </div>
                </div>
                <h1 className="text-3xl text-center text-white font-semibold">Give Feedback.</h1>
                <p className="text-md text-center border-b pb-4 w-1/2 mx-auto border-[#00ffc3] text-white mt-1 tracking-wider">Share your opinion with others.</p>
                <div className="my-16">
                    <Feedback />
                </div>
            </div>
        </section>
    );
};
export default Explore;