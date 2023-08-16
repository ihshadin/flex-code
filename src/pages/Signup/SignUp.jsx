import { Link } from "react-router-dom";
import { FaGithub, FaRegEnvelope, FaSpinner, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";
import "./Signup.css";
import { toast } from "react-hot-toast";
const SignUp = () => {
  const { createUser, loading, setLoading, updateUserProfile, setReload } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // "You clicked the button!", "success";

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // console.log(user);
        updateUserProfile(name)
          .then(() => {
            setReload(new Date().getTime());
          })
          .catch((error) => {
            toast.error("Login Failed. " + error.message);
          });
        reset();
        setLoading(false);

        toast.success("Login Successfull!");
        // Swal.fire("Login Successfull!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login Failed. " + error.message);
      });
    console.log(name, email, password);
  };

  return (
    <div className="justify-center items-center flex pt-10">
      <div className="bg-[#1e2d40] shadow-2xl md:w-2/4 max-w-md mx-auto rounded-xl px-7 my-14">
        <>
          <div className="flex items-center justify-center text-white text-2xl font-bold py-8">
            <img className="w-16 h-16" src="/20230810_125620.png" alt="img" />
            <span className="text-[#00ffc3] mr-1">Flex </span> {} Code
          </div>
          <SocialLogin />
          <div className="max-w-[150px] flex justify-center border-2 border-[#00ffc3] rounded mx-auto my-8"></div>
        </>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 px-2 font-semibold rounded-md mb-5 hover:bg-[#17181B] cursor-pointer">
            <FaUser className="text-2xl mr-2 " />
            <input
              // class="p-2 border rounded outline-none transition flex-1 bg-[#1e2d40]  focus:bg-[#1e2d40] active:bg-[#1e2d40] pointer-events-auto"
              // class="bg-black text-red p-2 rounded-lg border-none fo"
              className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
              type="text"
              name="name"
              {...register("name", { required: true })}
              id=""
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 font-semibold rounded-md mb-5 px-2 hover:bg-[#17181B] cursor-pointer">
            <FaRegEnvelope className="text-2xl mr-2" />
            <input
              className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
              type="email"
              name="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="flex items-center border-2 border-gray-500 text-gray-400 font-semibold rounded-md mb-3 px-2 hover:bg-[#17181B] cursor-pointer">
            <MdLockOutline className="text-2xl mr-2" />
            <input
              className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
              type="password"
              name="password"
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
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">Must be 6 characters</p>
            )}
            {/* {errors.password?.type === "pattern" && (
              <p className="text-red-500 text-sm mt-1">
                Must have one Uppercase, one lower case, one number
              </p>
            )} */}
          </div>
          {/* {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )} */}
          {/* {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">Must be 6 characters</p>
          )} */}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm mt-1 mb-2 text-center">
              Must have one Uppercase, one lower case, one number
            </p>
          )}
          <div className="flex justify-end text-gray-300 items-center text-sm">
            <p className="flex items-center gap-x-1">
              {" "}
              <input
                type="checkbox"
                // checked="checked"
                defaultChecked={false}
                className="checkbox h-4 w-4 checkbox-accent"
              />{" "}
              <span>I agree to</span>{" "}
            </p>
            <p className="text-right inline-block cursor-pointer ml-1 hover:link text-blue-400 ">
              Terms and conditions?
            </p>
          </div>
          {/* <input
            type="submit"
            className="mt-3 uppercase bg-[#2fb595] px-6 font-bold text-lg text-[#1e2d40] rounded-md mb-6 py-1 hover:bg-[#43d1af] cursor-pointer"
            value="Sign up"
          /> */}
          <button
            type="submit"
            className="mt-3 uppercase bg-[#2fb595] px-6 font-bold text-lg text-[#1e2d40] rounded-md mb-6 py-1 hover:bg-[#43d1af] cursor-pointer"
          >
            {loading ? (
              <FaSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Sign up"
            )}
          </button>
        </form>
        <div className="text-center text-gray-300 pb-10">
          <Link to="/login">
            {" "}
            <span className="cursor-pointer link text-gray-300 hover:text-blue-500">
              Sign in
            </span>
          </Link>{" "}
          if you have an account yet.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
