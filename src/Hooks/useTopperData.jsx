import React, { useEffect, useState } from "react";
import useAxiosNormal from "./useAxiosNormal";
import useAuth from "./useAuth";

const useTopperData = () => {
  const { user } = useAuth();
  const [topperData, setTopperData] = useState([]);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/solvedProblems/topperdata").then((data) => {
      setTopperData(data);
    });
  }, [user?.email]);

  return [topperData];
};

export default useTopperData;
