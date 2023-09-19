import React, { useEffect } from "react";
import OverViewAd from "./OverViewAd/OverViewAd";
import UserRationChart from "./UserRatioChart/UserRationChart";
import { motion } from "framer-motion";

const AdminMainContent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <motion.div
      key="flex_04673hdlhsk22"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <OverViewAd />
      <UserRationChart />
    </motion.div>
  );
};

export default AdminMainContent;
