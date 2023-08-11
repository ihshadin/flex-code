import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import Slider from "../Slider/Slider";
import ExploreUs from "../../../components/ExploreUs/ExploreUs";
import Testimonials from "../../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider />
      <ExploreUs />
      <OurPartners />
      <UserCount />
      <Faq></Faq>
      <Testimonials />
    </div>
  );
};
export default Home;
