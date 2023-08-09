import { Outlet } from "react-router-dom";
import OurPartners from "./OurPartners/OurPartners";
import UserCount from "./UserCount/UserCount";

const Home = () => {
return (
<div className="px-5 md:px-10 container mx-auto">
   <OurPartners/>
   <UserCount/>
</div>
);
};
export default Home;