import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFlexUser = () => {
  const { user, setLoading } = useAuth();
  const [flexUser, setFlexUser] = useState(null);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (user?.email) { 
      axiosSecure.get(`/users?email=${user.email}`).then((data) => {
        setFlexUser(data.data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [user?.email]);

  return [flexUser];
};

export default useFlexUser;
