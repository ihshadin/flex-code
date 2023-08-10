import { Outlet } from "react-router-dom";
import OurPartners from "./OurPartners/OurPartners";
import UserCount from "./UserCount/UserCount";
import Faq from "./FAQ/Faq";

const Home = () => {
  return (
    <div className="px-5 md:px-10 container mx-auto">
      <OurPartners />
      <UserCount />
      <Faq></Faq>
    </div>
  );
};
export default Home;
