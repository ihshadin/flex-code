import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const clickSignInWithGitHub = () => {
    console.log("click");
    // console.log("click");
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });

        // console.log(saveUser);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  const clickSignInWithGoogle = () => {
    console.log("click");
    // console.log("click");
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });

        // console.log(saveUser);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div>
      <div
        onClick={clickSignInWithGitHub}
        className="flex border-2 border-gray-500 mb-6 text-gray-300 justify-center font-semibold rounded-md py-1 hover:bg-[#17181B] cursor-pointer"
      >
        <span className="mr-2">Sign in with GitHub</span>
        <FaGithub className="text-2xl" />
      </div>
      <div
        onClick={clickSignInWithGoogle}
        className="flex border-2 border-gray-500 text-gray-300 justify-center font-semibold rounded-md py-1 hover:bg-[#17181B] cursor-pointer"
      >
        <span className="mr-2">Sign in with Google</span>
        <FaGoogle className="text-2xl" />
      </div>
    </div>
  );
};

export default SocialLogin;
