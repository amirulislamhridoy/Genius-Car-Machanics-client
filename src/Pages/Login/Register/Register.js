import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Helmet from "react-helmet";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const terms = event.target.terms.checked

    // if(terms){
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // }
  };
  // const handleCheckBox = (e) => {
  //     const checked = e.target.checked
  //     const signUpBtn = document.getElementById('signUpBtn')
  //     console.log(signUpBtn)
  //     if(checked){
  //         signUpBtn.removeAttribute('disabled')
  //         console.log('slsfsfs')
  //     }else{
  //         signUpBtn.setAttribute('disabled',true)
  //     }
  // }

  if (user) {
    navigate("/");
    // console.log(user)
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className="signup">
      {/* <Helmet>
        <title>Sign Up - Ginius Car Machanics</title>
      </Helmet> */}
      <PageTitle title={"Sign Up"}></PageTitle>
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        {/* <input onClick={handleCheckBox} type="checkbox" name="terms" id="terms" />
                <label className="px-2" htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input className="w-50 mx-auto bg-primary rounded border-0 text-white" disabled id='signUpBtn' type="Submit" value="Sign Up" /> */}

        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        {/* <label className={agree ? 'mx-2' : 'text-danger mx-2'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
        <label className={`mx-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms and Conditions
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto bg-primary rounded border-0 "
          id="signUpBtn"
          type="Submit"
          value="Sign Up"
        />
      </form>
      <p>
        Already Have an Account ?{" "}
        <Link to="/login" style={{ color: "red", textDecoration: "none" }}>
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
