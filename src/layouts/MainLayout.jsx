import React, { useContext, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import FlexcodeLoading from "../components/FlexcodeLoading/FlexcodeLoading";
import premiumlogo from "/premiumlogo.png";
import normallogo from "/20230810_125620.png";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosNormal from "../Hooks/useAxiosNormal";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  const [userPaid, setUserPaid] = useState(false);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  const { user } = useContext(AuthContext);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    if (user) {
      axiosNormal.get(`/payment/email?email=${user?.email}`).then((data) => {
        if (data.paidStatus === "paid") {
          setUserPaid(true);
        } else {
          setUserPaid(false)
        }
      });
    }
  }, [user?.email, userPaid]);

  // Function to handle user logout
  const handleLogout = () => {
    // Add your logout logic here
    setUserPaid(false); // Set userPaid to false when user logs out
  };

  

  return (
    <>
      {userPaid &&
        <Helmet>
          <link rel="icon" href={premiumlogo} />
        </Helmet>
      }

      <NavBar setUserPaid={setUserPaid} onLogout={handleLogout} />
      <main className="min-h-[calc(100vh-515px)]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default MainLayout;
