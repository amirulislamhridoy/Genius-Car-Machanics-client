import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const handleResetEmail = () => {
        sendEmailVerification()
        toast.success('Resend email')
    }
    
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user?.providerData[0]?.providerId === "password" && !user.emailVerified){
        // console.log(user)
        return <div>
            <h2>Your email is not verified</h2>
            <button onClick={handleResetEmail}>Resend verification email</button>
        </div>
    }
    return <>
    <ToastContainer />
    {children}
    </>
};

export default RequireAuth;