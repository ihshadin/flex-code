import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/users/all`).then((data) => {
      setAllUsers(data.data);
    });
  }, []);

  return [allUsers];
};

export default useAllUsers;
