import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = () => {
  
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  return (
    <AnimatePresence>
        <NavBar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key="main943573hfkfhgd0"
        >
          <main className="min-h-[calc(100vh-515px)]">
            <Outlet />
          </main>
        </motion.div>
        <Footer />
        <ScrollRestoration />
    </AnimatePresence>
  );
};

export default MainLayout;
