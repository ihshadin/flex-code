import React, { useEffect, useState } from "react";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import useFlexUser from "../../Hooks/useFlexUser";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ChallengeCard from "./ChallengeCard";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import { Helmet } from "react-helmet";

const AllChallenges = () => {

  const [axiosNormal] = useAxiosNormal()
  const [flexUser] = useFlexUser()
  const [challenges, setChallenges] = useState([])
  console.log(flexUser?.username);
  useEffect(() => {
    axiosNormal.get(`/challenge/${flexUser?.username}`).then(data => {
      // console.log(data, flexUser);
      setChallenges(data)
    })
  }, [flexUser])

  if (!flexUser) {
    return (
      <FlexcodeLoading />
    )
  }
  else if (challenges.length === 0) {
    return <div className="flexcode-container  flexcode-banner-bg min-h-screen">
      <SectionTitle title={'Your are not Challenged yet.'} descrition={'participate to strong your knowledge !'} />
    </div>
  }
  else {
    console.log(challenges);
    return (
      <div className="flexcode-container  flexcode-banner-bg min-h-screen">
        <Helmet title="Flex Code | Challenges"/>
        <SectionTitle title={'Your Challenges'} descrition={'participate to strong your knowledge !'} />

        <div className="grid md:grid-cols-2 gap-6">
          {
            challenges?.map(challenge => {
              return (
                <div key={challenge?._id}>
                  <ChallengeCard
                    ownId={challenge?._id}
                    id={challenge?.problemId}
                    challengeName={challenge?.problem}
                    sender={challenge?.sender}
                    receiver={challenge?.receiver}
                    winner={challenge?.winner}
                    winnerTime={challenge?.winnerTime}
                    time={challenge?.timeStamp} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
};
export default AllChallenges;