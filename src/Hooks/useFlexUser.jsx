import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosNormal from './useAxiosNormal';

const useFlexUser = () => {
    const { user, setLoading } = useAuth();
    const [flexUser, setFlexUser] = useState(null);
    const [axiosNormal] = useAxiosNormal();

    useEffect(() => {
        axiosNormal.get(`/users?email=${user?.email}`)
            .then(data => {
                setFlexUser(data);
                setLoading(false)
            })
    }, [user?.email])

    return [flexUser];
};

export default useFlexUser;