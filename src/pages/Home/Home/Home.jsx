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
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }
  return (
    <>
    <Helmet title="Welcome to Flex Code"/>
      <motion.div
        key="flex_5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Banner />
        <OurPartners />
        <ExploreUs />
        <UserCount />
        <Faq />
        <CodeEditor />
        <Testimonials />
        <BlogSection />
      </motion.div>
    </>
  );
};
export default Home;
