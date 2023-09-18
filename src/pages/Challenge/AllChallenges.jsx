import React, { useEffect, useState } from "react";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import useFlexUser from "../../Hooks/useFlexUser";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ChallengeCard from "./ChallengeCard";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import { Helmet } from "react-helmet";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import Swal from "sweetalert2";

const AllChallenges = () => {
  const [axiosNormal] = useAxiosNormal();
  const [flexUser] = useFlexUser();
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  console.log(flexUser?.username);
  useEffect(() => {
    axiosNormal.get(`/challenge/${flexUser?.username}`).then((data) => {
      setChallenges(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [flexUser]);

  const HandleDeleteChallenge = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosNormal.delete(`/challenge?delete=${id}`);

          if (response.success === true) {
            setChallenges((prevChallenges) =>
              prevChallenges.filter((challenge) => challenge._id !== id)
            );
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Challeange has been Denied!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: "flex items-center justify-center",
                content: "bg-white p-4 rounded-lg",
                title: "text-center text-xl font-semibold mb-2",
              },
            });
          } else {
            Swal.fire(
              "Error!",
              "An error occurred while deleting the note.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire(
            "Error!",
            "An error occurred while deleting the note.",
            "error"
          );
        }
      }
    });
  };

  if (isLoading) {
    return <FlexcodeLoading />;
  } else if (challenges.length === 0) {
    return (
      <div className="flexcode-container flex items-center justify-center !pt-10 !pb-0 md:!pt-10 min-h-screen">
        <SectionTitle
          title={"Your are not Challenged yet."}
          descrition={"participate to strong your knowledge !"}
        />
      </div>
    );
  } else {
    return (
      <div className="flexcode-container !pt-16 md:!pt-10 min-h-screen">
        <Helmet title="Flex Code | Challenges" />
        <PageBannerTitle
          title="Your Challenges"
          shortDesc="participate to strong your knowledge !"
        />

        <div className="grid md:grid-cols-2 gap-6 py-10">
          {challenges?.map((challenge) => {
            return (
              <div key={challenge?._id}>
                <ChallengeCard
                  ownId={challenge?._id}
                  id={challenge?.problemId}
                  challengeName={challenge?.problem}
                  sender={challenge?.sender}
                  senderImg={challenge?.senderImg}
                  receiver={challenge?.receiver}
                  winner={challenge?.winner}
                  winnerTime={challenge?.winnerTime}
                  time={challenge?.timeStamp}
                  senderName={challenge?.senderName}
                  HandleDeleteChallenge={HandleDeleteChallenge}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default AllChallenges;
