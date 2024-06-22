import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='w-25 mx-auto mt-5'><Spinner animation="border" variant="success" /></div>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoutes;