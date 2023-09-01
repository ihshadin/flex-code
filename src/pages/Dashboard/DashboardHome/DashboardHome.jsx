import React, { useEffect, useState, useContext } from "react";
import DbUser from "../DbUser/DbUser";
import SolvedProblems from "../SolvedProblems/SolvedProblems";
import Badges from "../Badges/Badges";
import Submissions from "../Submissions/Submissions";
import { useNavigation } from "react-router-dom";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import RecentActiviy from "../RecentActiviy/RecentActiviy";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosNormal from "../../../hooks/useAxiosNormal";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [mySolvedProblems, setMySolvedProblems] = useState([]);
  const [axiosNormal] = useAxiosNormal();

  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  useEffect(() => {
    axiosNormal
      .get(`/solvedProblems/userSolveProblem?email=${user?.email}`)
      .then((data) => {
        setMySolvedProblems(data);
      });
  }, [user?.email]);

  return (
    <section>
      <NavBar />
      <div className="flexcode-container -mt-10 flex flex-col md:flex-row gap-3 md:gap-5">
        <div className="md:w-[30%]">
          <DbUser mySolvedProblems={mySolvedProblems} />
        </div>
        <div className="md:w-[70%] flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <SolvedProblems mySolvedProblems={mySolvedProblems} />
            <Badges />
          </div>
          <Submissions mySolvedProblems={mySolvedProblems} />
          <RecentActiviy mySolvedProblems={mySolvedProblems} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DashboardHome;
