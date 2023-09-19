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
  const [challenged, setChallenged] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosNormal
      .get(`/challenge/receiver/${flexUser?.username}`)
      .then((data) => {
        setChallenges(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, [flexUser]);

  useEffect(() => {
    axiosNormal.get(`/challenge/sender/${flexUser?.username}`).then((data) => {
      setChallenged(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [flexUser]);


  const HandleDeleteChallenge = (id, from) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "transparent",
      cancelButtonColor: " red",
      confirmButtonText: "Yes, delete it!",
      background: "#1e2d40",
      color: "white",
      customClass: {
        confirmButton: "flexcode-button",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosNormal.delete(`/challenge?delete=${id}`);

          if (response.success === true && from === "receiver") {
            setChallenges((prevChallenges) =>
              prevChallenges.filter((challenge) => challenge._id !== id)
            );
            Swal.fire({
              position: "center",
              icon: "success",
              background: "#1e2d40",
              color: "white",
              title: "Your Challenge has been Delete!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: "flex items-center justify-center",
                content: "bg-white p-4 rounded-lg",
                title: "text-center text-xl font-semibold mb-2",
              },
            });
          } else if (response.success === true && from === "sender") {
            setChallenged((prevChallenges) =>
              prevChallenges.filter((challenge) => challenge._id !== id)
            );
            Swal.fire({
              position: "center",
              icon: "success",
              background: "#1e2d40",
              color: "white",
              title: "Your challeng has been Delete!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: "flex items-center justify-center",
                content: "bg-white p-4 rounded-lg",
                title: "text-center text-xl font-semibold mb-2",
              },
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the project.",
              icon: "error",
              confirmButtonColor: "transparent",
              background: "#1e2d40",
              color: "white",
              customClass: {
                confirmButton: "flexcode-button",
              },
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the project.",
            icon: "error",
            confirmButtonColor: "transparent",
            background: "#1e2d40",
            color: "white",
            customClass: {
              confirmButton: "flexcode-button",
            },
          });
        }
      }
    });
  };

  if (isLoading) {
    return <FlexcodeLoading />;
  } else if (challenges.length === 0 && challenged.length === 0) {
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
        {challenges.length !== 0 && (
          <div>
            <PageBannerTitle
              title="Received Challenges"
              shortDesc="participate to strong your knowledge !"
            />

            <div className="grid md:grid-cols-2 gap-6 py-10">
              {challenges?.map((challenge) => {
                return (
                  <div key={challenge?._id}>
                    <ChallengeCard
                      challenges={challenge}
                      HandleDeleteChallenge={HandleDeleteChallenge}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {challenged.length !== 0 && (
          <div className={`${challenges.length === 0 ? "mt-0" : "mt-10"}`}>
            <PageBannerTitle
              title="Send Challenges"
              shortDesc="See your opponent accept the challenge or not."
            />

            <div className="grid md:grid-cols-2 gap-6 py-10">
              {challenged?.map((challenge) => {
                return (
                  <div key={challenge?._id}>
                    <ChallengeCard
                      fromSender="sender"
                      challenges={challenge}
                      HandleDeleteChallenge={HandleDeleteChallenge}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
};
export default AllChallenges;
