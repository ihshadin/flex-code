import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import Slider from "../Slider/Slider";
import ExploreUs from "../../../components/ExploreUs/ExploreUs";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Editor from "../Editor/Editor";

const Home = () => {
  return (
    <div>
      <Slider />
      <OurPartners />
      <ExploreUs />
      <UserCount />
      <Faq></Faq>
      <Testimonials />
      <Editor/>
    </div>
  );
};
export default Home;
