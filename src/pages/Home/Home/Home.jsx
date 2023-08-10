import { Outlet } from "react-router-dom";
import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <OurPartners />
      <UserCount />
      <Faq></Faq>
    </div>
  );
};
export default Home;
