import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const clickSignInWithGitHub = () => {
    // console.log("click");
    // console.log("click");
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfull!");
        navigate(from, { replace: true });

        // console.log(saveUser);
        const saveUser = {
          username: user.displayName,
          email: user.email,
          userRole: "general",
        };

        // console.log(saveUser);

        fetch("http://localhost:5000/student", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Login Successfull!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error("Login Failed. " + error.message);
      });
  };
  const clickSignInWithGoogle = () => {
    console.log("click");
    // console.log("click");
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        // navigate(from, { replace: true });

        const saveUser = {
          username: user.displayName,
          email: user.email,
          userRole: "general",
        };

        // console.log(saveUser);

        fetch("http://localhost:5000/student", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Login Successfull!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error("Login Failed. " + error.message);
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
