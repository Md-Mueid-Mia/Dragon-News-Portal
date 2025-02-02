import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <div className="flex flex-col gap-3 mt-4">
        <button onClick={googleLogin} className="btn"><FaGoogle /> Login With Google</button>
        <button onClick={githubLogin} className="btn"><FaGithub /> Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
