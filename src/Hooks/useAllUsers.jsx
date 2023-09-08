import React, { useEffect, useState } from "react";
import useAxiosNormal from "./useAxiosNormal";

const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get(`/users/all`).then((data) => {
      setAllUsers(data);
    });
  }, []);

  return [allUsers];
};

export default useAllUsers;
