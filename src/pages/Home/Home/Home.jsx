import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import ExploreUs from "../../../components/ExploreUs/ExploreUs";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Editor from "../Editor/Editor";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
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
