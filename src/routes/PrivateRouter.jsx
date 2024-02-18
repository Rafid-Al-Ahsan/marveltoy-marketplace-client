import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRouter = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    // useLoaction hook from react-router-dom
    const location = useLocation();

    if(loading) {
        return (
            <div className='text-center mt-[10%] '>
                <progress className="progress w-56 bg-[#a3174f]
                "></progress>
            </div>
        );
    }

    if(user) return children;
    // state is a property and from is an object(instead of usinf from you can name anything else)
    //we are setting the value of the property state wieh location value
    return <Navigate state={{from: location}} to="/login" replace></Navigate> //replace doesn't keep the record in browser history
};

export default PrivateRouter;