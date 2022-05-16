import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Helmet from "react-helmet";
import axios from "axios";

const Login = () => {
  const location = useLocation()
    const  emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('http://localhost:5000/login', {email})
        localStorage.setItem('accessToken', data.accessToken)
        // console.log(data)
        navigate(from, { replace: true });
    }
    const navigateRegister = () => {
        navigate('/register')
    }
    if(user){
      // navigate('/')
      // navigate(from)
    }
    let errorElement;
    if(error){
      errorElement = <p style={{color: 'red'}}>{error.message}</p>
    }
    
    const handleResetPassword = async () => {
      const email = emailRef.current.value
      await sendPasswordResetEmail(email)
      toast('Please collect your email and then reset password.')
    }

  return (
    <div className="w-50 mx-auto ">
      {/* <Helmet>
        <title>Login - Ginius Car Machanics</title>
      </Helmet> */}
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center text-primary mt-3">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-50 mx-auto d-block" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>New to Genius Car <Link to='/register' onClick={navigateRegister} className='text-danger text-decoration-none '>Please Register</Link></p>
      {errorElement}
      <p>Forget Password <button onClick={handleResetPassword} className="btn btn-link">Reset Password</button></p>
      <SocialLogin></SocialLogin>
      
    </div>
  );
};

export default Login;
