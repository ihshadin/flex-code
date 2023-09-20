import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEnvelope, FaSpinner } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn, resetPassword, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    signIn(email, password)
      .then(() => {
        toast.success("Login Successfull!");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login Failed. " + error.message);
      });
  };

  const handleReset = async (email) => {
    try {
      await resetPassword(email);
      toast.success("Please check your email for reset link.");
      setLoading(false);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("Please enter a valid email address.");
        setLoading(false);
      } else {
        toast.error("Failed to send password reset email. Please try again.");
        setLoading(false);
      }
    }
  };

  return (
    <div className="flexcode-container">
      <Helmet title="Flex Code | Login" />
      <div className="bg-secondary-color shadow-2xl md:w-2/4 max-w-md mx-auto rounded-xl px-7 my-5">
        <div className="flex justify-center py-8">
          <img className="w-44 md:w-48" src="/flex-codelogo.png" alt="logo" />
        </div>
        <SocialLogin />
        <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-8"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start gap-3">
            <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#17181B] cursor-pointer">
              <FaRegEnvelope className="w-5 h-5 text-[#0fcda156]" />
              <input
                className="flex-1 bg-transparent text-base outline-none py-2"
                type="email"
                autoComplete="off"
                name="email"
                {...register("email", { required: true })}
                id=""
                placeholder="Email"
              />
              {errors?.email && (
                <span className="text-red-500 text-xs mt-1">
                  Email is required
                </span>
              )}
            </div>
            <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#17181B] cursor-pointer">
              <MdLockOutline className="w-5 h-5 text-[#0fcda156]" />
              <input
                className="flex-1 bg-transparent text-base outline-none py-2"
                type="password"
                name="password"
                autoComplete="off"
                {...register("password", { required: true })}
                id=""
                placeholder="Password"
              />
              {errors?.password?.type === "required" && (
                <p className="text-red-500 text-xs mt-1">
                  Password is required
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <span
              onClick={() => {
                handleReset(errors.email ? "" : getValues("email")); // Use getValues from react-hook-form
              }}
              className="text-right cursor-pointer hover:link text-gray-300 hover:text-blue-500 text-sm"
            >
              Forgot your password?
            </span>
          </div>
          <button
            type="submit"
            className=" px-6 py-[6px] flexcode-button cursor-pointer mt-3 mb-6 "
          >
            {loading ? (
              <FaSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Sign in"
            )}
          </button>
        </form>
        <div className="text-center pb-10 text-sm text-slate-300">
          <Link
            to="/signup"
            className="cursor-pointer link hover:text-blue-500 mr-1"
          >
            Sign up
          </Link>
          if you don&apos;t have an account yet.
        </div>
      </div>
    </div>
  );
};

export default Login;
