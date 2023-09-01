import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import useAxiosNormal from "../../../hooks/useAxiosNormal";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [axiosNormal] = useAxiosNormal()

  const clickSignInWithGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfull!");
        navigate(from, { replace: true });

        const saveUser = {
          name: user.displayName || 'User Name',
          email: user.email,
          username: `${user.email.split('@')[0]}${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
          date: new Date(),
          userRole: 'general',
          gender: '',
          address: '',
          fbLinks: '',
          LinkLinks: '',
          webSiteLink: '',
          mobile: user.phoneNumber || null,
          dateOfBirth: new Date(),
          education: [
            {
              degreeTitle: '',
              InstituteName: '',
            }
          ],
          skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
          userPhotoUrl: user.photoURL || '',
        };

        axiosNormal.post("/users", saveUser)
          .then((data) => {
            console.log(data);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error("Login Failed. " + error.message);
      });
  };
  const clickSignInWithGoogle = () => {

    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        const saveUser = {
          name: user.displayName || 'User Name',
          email: user.email,
          username: `${user.email.split('@')[0]}${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
          date: new Date(),
          userRole: 'general',
          gender: '',
          address: '',
          fbLinks: '',
          LinkLinks: '',
          webSiteLink: '',
          mobile: user.phoneNumber || null,
          dateOfBirth: new Date(),
          education: [
            {
              degreeTitle: '',
              InstituteName: '',
            }
          ],
          skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
          userPhotoUrl: user.photoURL || '',
        };

        axiosNormal.post("/users", saveUser)
          .then((data) => {
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
