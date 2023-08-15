import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import Editor from "../Editor/Editor";
import ExploreUs from "../ExploreUs/ExploreUs";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurPartners />
      <ExploreUs />
      <UserCount />
      <Faq></Faq>
      <Testimonials />
      <Editor />
    </div>
  );
};
export default Home;
