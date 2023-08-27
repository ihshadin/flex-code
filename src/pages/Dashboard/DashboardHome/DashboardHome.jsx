import React, { useEffect, useState, useContext } from "react";
import DbUser from "../DbUser/DbUser";
import SolvedProblems from "../SolvedProblems/SolvedProblems";
import Badges from "../Badges/Badges";
import Submissions from "../Submissions/Submissions";
import { useNavigation } from "react-router-dom";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import RecentActiviy from "../RecentActiviy/RecentActiviy";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const DashboardHome = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [mySolvedProblems, setMySolvedProblems] = useState([]);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/solvedProblems/userSolveProblem?email=${user?.email}`)
      .then(data => {
        setMySolvedProblems(data.data);
      })
  }, [user?.email])

  return (
    <section>
      <div className="flexcode-container flex flex-col md:flex-row gap-3 md:gap-0 w-[100%]">
        <div className="md:w-[30%]">
          <DbUser mySolvedProblems={mySolvedProblems} />
        </div>
        <div className="md:w-[70%]">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:ml-5">
            <SolvedProblems />
            <Badges />
          </div>
          <Submissions />
          <RecentActiviy mySolvedProblems={mySolvedProblems} />
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
