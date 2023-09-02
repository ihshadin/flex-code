import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";

const MainLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-515px)]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default MainLayout;
