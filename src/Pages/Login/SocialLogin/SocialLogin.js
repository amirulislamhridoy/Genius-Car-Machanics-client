import React from "react";
import googleLogo from "../../../images/googleLogo.png";
import facebookLogo from "../../../images/facebookLogo.png";
import githubLogo from "../../../images/githubLogo.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  // if(loading){
  //     return <div>Loading...</div>
  // }

  const from = location.state?.from?.pathname || '/'

  let errorElement;
  if (error) {
    errorElement = (
      <p style={{ color: "red" }}>
        {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    // navigate("/");
    navigate(from, {replace: true})
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="w-50 bg-dark" style={{ height: "1px" }}></div>
        <p className="mb-1 px-3">or</p>
        <div className="w-50 bg-dark" style={{ height: "1px" }}></div>
      </div>
      <div>
        {/* {error?.message} {error1?.message} ai vabe dile o hobe */}
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="bg-info w-50 rounded text-center my-2 border-0 mx-auto d-block py-2"
        >
          <img width="30" src={googleLogo} alt="" />
          <span className="px-2">Sign In With Google</span>
        </button>
        <button className="bg-info w-50 rounded text-center my-2 border-0 mx-auto d-block py-2">
          <img width="30" src={facebookLogo} alt="" />
          <span className="px-2">Sign In With Facebook</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="bg-info w-50 rounded text-center my-2 border-0 mx-auto d-block py-2"
        >
          <img width="30" src={githubLogo} alt="" />
          <span className="px-2">Sign In With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
