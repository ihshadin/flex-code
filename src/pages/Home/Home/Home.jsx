import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import Slider from "../Slider/Slider";
import ExploreUs from "../../../components/ExploreUs/ExploreUs";

const Home = () => {
  return (
    <div>
      <Slider />
      <ExploreUs />
      <OurPartners />
      <UserCount />
      <Faq></Faq>
    </div>
  );
};
export default Home;
