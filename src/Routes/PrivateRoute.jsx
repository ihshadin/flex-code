import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    // if (loading) {
    //     return <progress className="progress w-56"></progress>
    // }

    // if (user) {
    //     return children;
    // }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;