import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosNormal from './useAxiosNormal';

const useOneUser = () => {
    const { user, setLoading } = useAuth();
    const [oneUser, setOneUser] = useState(null);
    const [axiosNormal] = useAxiosNormal();

    useEffect(() => {
        axiosNormal.get(`/users?email=${user?.email}`)
            .then(data => {
                setOneUser(data);
                setLoading(false)
            })
    }, [user?.email])

    return [oneUser];
};

export default useOneUser;