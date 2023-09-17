import React, { useEffect, useState } from "react";
// import DbUser from "../DbUser/DbUser";
import SolvedProblems from "../SolvedProblems/SolvedProblems";
import Badges from "../Badges/Badges";
import Submissions from "../Submissions/Submissions";
import { useNavigation, useParams } from "react-router-dom";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import RecentActiviy from "../RecentActiviy/RecentActiviy";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import DbUserSideBar from "../DbUserSideBar/DbUserSideBar";
import useFlexUser from "../../../Hooks/useFlexUser";
import { Helmet } from "react-helmet";

const DashboardHome = () => {
  const { username } = useParams()
  const [mySolvedProblems, setMySolvedProblems] = useState([]);
  const [axiosNormal] = useAxiosNormal();
  const [flexUser] = useFlexUser()
  const mainUserName = username || flexUser?.username;

  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  useEffect(() => {
    axiosNormal
      .get(`/solvedProblems/userSolveProblem/${mainUserName}`)
      .then((data) => {
        setMySolvedProblems(data);
      });
  }, [mainUserName]);

  // useEffect(() => {
  //   axiosNormal
  //     .get(`/solvedProblems/userSolveProblem?email=${user?.email}`)
  //     .then((data) => {
  //       setMySolvedProblems(data);
  //     });
  // }, [user?.email]);

  return (
    <section>
      <Helmet title="FlexCode || Dashboard"/>
      {username ? <></> : <NavBar />}

      <div className="flexcode-container !pt-16 md:!pt-10 md:-mt-5 flex flex-col md:flex-row gap-3 md:gap-5">
        <div className="md:w-[30%]">
          <DbUserSideBar username={mainUserName} mySolvedProblems={mySolvedProblems} />
        </div>
        <div className="md:w-[70%] flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <SolvedProblems username={mainUserName} mySolvedProblems={mySolvedProblems} />
            <Badges username={mainUserName} />
          </div>
          <Submissions username={mainUserName} mySolvedProblems={mySolvedProblems} />
          <RecentActiviy username={mainUserName} mySolvedProblems={mySolvedProblems} />
        </div>
      </div>
      {username ? <></> : <Footer />}
    </section>
  );
};

export default DashboardHome;
