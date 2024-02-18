import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRouter = ({ children }) => {

    const {user} = useContext(AuthContext);

    if(user) return children;
    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;