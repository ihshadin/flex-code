import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { FaRegEnvelope, FaSpinner, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";
import "./Signup.css";
import { toast } from "react-hot-toast";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";
import useAxiosNormal from "../../hooks/useAxiosNormal";
const SignUp = () => {
  const { createUser, loading, setLoading, updateUserProfile, setReload } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const [axiosNormal] = useAxiosNormal()
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
            setReload(new Date().getTime());
            toast.success("Login Successfull!");

            const saveUser = {
              name: name || 'User Name',
              email: email,
              username: `${email.split('@')[0]}${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
              date: new Date(),
              userRole: 'general',
              gender: '',
              address: '',
              fbLinks: '',
              LinkLinks: '',
              webSiteLink: '',
              mobile: null,
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
        reset();
        setLoading(false);
        toast.success("Login Successfull!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login Failed. " + error.message);
      });
    console.log(name, email, password);
  };

  // if (navigation.state === "loading") {
  //   return <FlexcodeLoading />;
  // }

  return (
    <div className="justify-center items-center flex pt-10">
      <div className="bg-[#1e2d40] shadow-2xl md:w-2/4 max-w-md mx-auto rounded-xl px-7 my-14">
        <>
          <div className="flex items-center justify-center text-white text-2xl font-bold py-8">
            <img className="w-16 h-16" src="/20230810_125620.png" alt="img" />
            <span className="text-[#0fcda1] mr-1">Flex </span> { } Code
          </div>
          <SocialLogin />
          <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-8"></div>
        </>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-5">
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
              <p className="text-red-500 text-xs mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-xs mt-1">Must be 6 characters</p>
            )}
          </div>
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm mt-1 mb-2 text-center">
              Must have one Uppercase, one lower case, one number
            </p>
          )}
          <div className="w-full">
            <div className="flex justify-end gap-1 text-gray-300 text-sm">
              <p className="flex items-center gap-1">
                <input
                  type="checkbox"
                  // checked="checked"
                  defaultChecked={isChecked}
                  onChange={handleCheckboxChange}
                  className="checkbox h-4 w-4 checkbox-accent"
                />
                <span>I agree to</span>
              </p>
              <Link className="text-right inline-block cursor-pointer hover:link text-blue-400 ">
                Terms and conditions?
              </Link>
            </div>
            <button
              type="submit"
              className={`${isChecked
                ? " px-6 py-[6px] flexcode-button cursor-pointer mt-3 mb-6"
                : " px-6 py-[6px] flexcode-button opacity-40 mt-3 mb-6 cursor-not-allowed"
                }`}
              onClick={() => {
                if (isChecked) {
                }
              }}
            >
              {loading ? (
                <FaSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
        <div className="text-center text-gray-300 pb-10">
          <Link to="/login">
            <span className="cursor-pointer link text-gray-300 hover:text-blue-500">
              Sign in
            </span>
          </Link>
          <span> if you have an account yet.</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
