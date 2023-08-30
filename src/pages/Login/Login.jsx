import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEnvelope, FaSpinner } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

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
    // console.log(data.email, data.password);
    const email = data.email;
    const password = data.password;
    const userInfo = { email, password };
    signIn(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfull!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);

        toast.error("Login Failed. " + error.message);
      });
  };

  const handleReset = async (email) => {
    try {
      await resetPassword(email);
      // console.log(email);
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

  // const handleReset = () => {
  //   const email = emailRef.current?.value;
  //   console.log(email);

  //   if (!email) {
  //     toast.error("Please enter a valid email address.");
  //     return;
  //   }

  //   resetPassword(email)
  //     .then(() => {
  //       toast.success("Please check your email for reset link.");
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err.code);
  //       if (err.code === "auth/user-not-found") {
  //         toast.error("Please enter a valid email address.");
  //       } else {
  //         toast.error("Failed to send password reset email. Please try again.");
  //       }
  //     });
  // };
  return (
    <div className="justify-center items-center flex pt-10">
      <div className="bg-[#1e2d40] shadow-2xl md:w-2/4 max-w-md mx-auto rounded-xl px-7 my-14">
        <>
          <div className="flex items-center justify-center text-white text-2xl  font-bold py-8">
            <img className="w-16 h-16" src="/20230810_125620.png" alt="img" />
            <span className="text-[#00ffc3] mr-1">Flex </span> {} Code
          </div>
          <SocialLogin />
          <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-8"></div>
        </>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 px-2 font-semibold rounded-md mb-5 hover:bg-[#17181B] cursor-pointer">
            <FaRegEnvelope className="text-2xl mr-2" />
            <input
              className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
              type="email"
              autoComplete="off"
              name="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Email"
              style={{ background: "transparent !important" }}
            />
            {errors?.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 px-2 font-semibold rounded-md mb-3 hover:bg-[#17181B] cursor-pointer">
            <MdLockOutline className="text-2xl mr-2" />
            <input
              className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
              type="password"
              name="password"
              autoComplete="off"
              {...register("password", { required: true })}
              id=""
              placeholder="Password"
            />
            {errors?.password?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>
          <div className="flex justify-end">
            <p
              onClick={() => {
                handleReset(errors.email ? "" : getValues("email")); // Use getValues from react-hook-form
              }}
              className="text-right inline-block cursor-pointer hover:link text-gray-300 hover:text-blue-500 text-sm"
            >
              Forgot your password?
            </p>
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

        <div className="text-center text-gray-300 pb-10">
          <Link to="/signup">
            {" "}
            <span className="cursor-pointer link text-gray-300 hover:text-blue-500 ">
              Sign up
            </span>
          </Link>{" "}
          if you don't have an account yet.
        </div>
      </div>
    </div>
  );
};

export default Login;
