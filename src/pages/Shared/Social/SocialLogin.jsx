import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";

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
          dateOfBirth: null,
          education: [
            {
              degreeTitle: '',
              InstituteName: '',
            }
          ],
          skills: [],
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
          isPremium: false,
          dateOfBirth: null,
          education: [
            {
              degreeTitle: '',
              InstituteName: '',
            }
          ],
          skills: [],
          userPhotoUrl: user.photoURL || '',
        };

        axiosNormal.post("/users", saveUser)
          .then((data) => {
            console.log(saveUser);
          });
        toast.success("Login Successfull!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login Failed. " + error.message);
      });
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={clickSignInWithGitHub}
        className="flex items-center justify-center gap-2 border border-slate-500 hover:border-[#0fcda18c] p-2 text-slate-300 rounded-lg hover:bg-[#17181B] cursor-pointer"
      >
        <span>Sign in with GitHub</span>
        <FaGithub className="w-5 h-5 text-slate-400" />
      </div>
      <div
        onClick={clickSignInWithGoogle}
        className="flex items-center justify-center gap-2 border border-slate-500 hover:border-[#0fcda18c] p-2 text-slate-300 rounded-lg hover:bg-[#17181B] cursor-pointer"
      >
        <span>Sign in with Google</span>
        <FaGoogle className="w-5 h-5 text-slate-400" />
      </div>
    </div>
  );
};

export default SocialLogin;
