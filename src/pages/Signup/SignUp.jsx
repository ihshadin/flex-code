import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEnvelope, FaSpinner, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";
import "./Signup.css";
import { toast } from "react-hot-toast";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import { Helmet } from "react-helmet";
const SignUp = () => {
  const { createUser, loading, setLoading, updateUserProfile, setReload } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const [axiosNormal] = useAxiosNormal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // "You clicked the button!", "success";

  // Step 2: Event Handler
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox value
  };

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(name)
          .then(() => {
            const saveUser = {
              name: name || "User Name",
              email: email,
              username: `${email.split("@")[0]}${
                Math.floor(Math.random() * (999 - 100 + 1)) + 100
              }`,
              date: new Date(),
              userRole: "general",
              gender: "",
              address: "",
              fbLinks: "",
              LinkLinks: "",
              webSiteLink: "",
              mobile: null,
              isPremium: false,
              dateOfBirth: null,
              education: [
                {
                  degreeTitle: "",
                  InstituteName: "",
                },
              ],
              skills: [],
              userPhotoUrl: user.photoURL || "",
            };
            console.log("73 line ", saveUser);
            axiosNormal.post("/users", saveUser).then((data) => {
              console.log(data, saveUser);
              navigate(from, { replace: true });
              toast.success("Login Successfull!");
              setReload(new Date().getTime());
              setLoading(false);
              reset();
            });
          })
          .catch((error) => {
            toast.error("Login Failed. " + error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error("Login Failed. " + error.message);
        setLoading(false);
      });
  };

  // if (navigation.state === "loading") {
  //   return <FlexcodeLoading />;
  // }

  return (
    <div className="flexcode-container">
      <Helmet title="FlexCode | Sign-up" />
      <div className="bg-secondary-color shadow-2xl md:w-2/4 max-w-md mx-auto rounded-xl px-7 my-5">
        <div className="flex justify-center py-8">
          <img className="w-44 md:w-48" src="/flex-codelogo.png" alt="logo" />
        </div>
        <SocialLogin />
        <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-8"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start gap-3">
            <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#17181B] cursor-pointer">
              <FaUser className="w-5 h-5 text-[#0fcda156]" />
              <input
                className="flex-1 bg-transparent text-base outline-none py-2"
                type="text"
                autoComplete="off"
                name="name"
                {...register("name", { required: true })}
                id=""
                placeholder="Write Your Name"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">Name is required</span>
              )}
            </div>
            <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#17181B] cursor-pointer">
              <FaRegEnvelope className="w-5 h-5 text-[#0fcda156]" />
              <input
                className="flex-1 bg-transparent text-base outline-none py-2"
                type="email"
                name="email"
                autoComplete="off"
                {...register("email", { required: true })}
                id=""
                placeholder="Write Your Email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">Email is required</span>
              )}
            </div>
            <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#17181B] cursor-pointer">
              <MdLockOutline className="w-5 h-5 text-[#0fcda156]" />
              <input
                className="flex-1 bg-transparent text-base outline-none py-2"
                type="password"
                name="password"
                autoComplete="off"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                })}
                id=""
                placeholder="Password"
              />{" "}
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-xs mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-xs mt-1">
                  Must be 6 characters
                </p>
              )}
            </div>
          </div>
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm mt-1 mb-2 text-center">
              Must have one Uppercase, one lower case, one number
            </p>
          )}
          <div className="w-full">
            <div className="flex justify-end gap-1 mt-1 text-gray-300 text-sm">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  // checked="checked"
                  defaultChecked={isChecked}
                  onChange={handleCheckboxChange}
                  className="checkbox h-4 w-4 checkbox-accent"
                />
                <span>I agree to</span>
              </div>
              <Link className="text-right inline-block cursor-pointer hover:link text-blue-400 ">
                Terms and conditions?
              </Link>
            </div>
            <button
              type="submit"
              className={`${
                isChecked
                  ? " px-6 py-[6px] flexcode-button cursor-pointer mt-3 mb-6"
                  : " px-6 py-[6px] flexcode-button opacity-40 mt-3 mb-6 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <FaSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
        <div className="text-center pb-10 text-sm text-gray-300">
          <Link
            to="/login"
            className="cursor-pointer link hover:text-blue-500 mr-1"
          >
            Sign in
          </Link>
          <span> if you have an account yet.</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
