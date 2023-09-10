import OurPartners from "../OurPartners/OurPartners";
import UserCount from "../UserCount/UserCount";
import Faq from "../FAQ/Faq";
import ExploreUs from "../ExploreUs/ExploreUs";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import CodeEditor from "../CodeEditor/CodeEditor";
import { useNavigation } from "react-router-dom";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import BlogSection from "../BlogSection/BlogSection";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }
  return (
    <div>
      <Banner />
      <OurPartners />
      <ExploreUs />
      <UserCount />
      <Faq></Faq>
      <CodeEditor />
      <Testimonials />
      <BlogSection />
    </div>
  );
};
export default Home;
