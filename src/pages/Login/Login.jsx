import { Link } from "react-router-dom";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="bg-[#1e2d40] shadow-2xl md:w-2/4 max-w-md mx-auto rounded-xl px-7 my-14">
      <>
        <div className="flex items-center justify-center text-white text-2xl font-bold py-8">
          <img className="w-16 h-16" src="/20230810_125620.png" alt="img" />
          <span className="text-[#00ffc3] mr-1">Flex </span> {} Code
        </div>
        <div className="flex border-2 border-gray-500 text-gray-300 justify-center font-semibold rounded-md py-1 hover:bg-[#17181B] cursor-pointer">
          <span className="mr-2">Sign in with GitHub</span>
          <FaGithub className="text-2xl" />
        </div>
        <div className="max-w-[80px] flex justify-center border-2 border-[#00ffc3] rounded mx-auto my-8"></div>
      </>
      <form action="">
        <div className="flex border-2 border-gray-500 text-gray-400 px-2 font-semibold rounded-md mb-6 py-1 hover:bg-[#17181B] cursor-pointer">
          <FaRegEnvelope className="text-2xl mr-2" />
          <input
            className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none"
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
        </div>
        <div className="flex border-2 border-gray-500 text-gray-400 px-2 font-semibold rounded-md mb-3 py-1 hover:bg-[#17181B] cursor-pointer">
          <MdLockOutline className="text-2xl mr-2" />
          <input
            className="flex-1 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
        </div>
        <div className="flex justify-end">
          <p className="text-right inline-block cursor-pointer hover:link text-gray-300 hover:text-blue-500 text-sm">
            Forgot your password?
          </p>
        </div>
        <input
          type="submit"
          className="mt-3 uppercase bg-[#2fb595] px-6 font-bold text-lg rounded-md mb-6 py-1 hover:bg-[#43d1af] cursor-pointer"
          value="Sign in"
        />
      </form>
      <div className="text-center text-gray-300 pb-10">
        <Link>
          {" "}
          <span className="cursor-pointer link text-gray-300 hover:text-blue-500 text-sm ">
            Sign up
          </span>
        </Link>{" "}
        if you don't have an account yet.
      </div>
    </div>
  );
};

export default Login;
