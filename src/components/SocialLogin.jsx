import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import React, { useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { auth } from "../provider/AuthProvider";

const SocialLogin = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  //Google SignIn
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message, "ERROR");
        setUser(null);
      });
  };

  //Github SigIn
  const handleGithub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        setUser(user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message, "ERROR");
        setUser(null);
      });
  };

  const handleTwitter = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        setUser(user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message, "ERROR");
        setUser(null);
      });
  };

  return (
    <div>
      <h2 className="font-bold  mb-3">Login With</h2>
      <div className="*:w-full space-y-4">
        <button onClick={handleGoogle} className="btn bg-base-300 rounded-none">
          <FaGoogle></FaGoogle> Google
        </button>
        <button onClick={handleGithub} className="btn bg-base-300 rounded-none">
          <FaGithub></FaGithub> GitHub
        </button>
        <button
          onClick={handleTwitter}
          className="btn bg-base-300 rounded-none"
        >
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
