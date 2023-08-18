import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";


const AddBlog = () => {
  const { user } = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const blogDetails = {
      ...data,
      userImage: user?.photoURL,
      userName: user?.displayName,
    };
    fetch("https://flex-code-server.vercel.app/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          console.log(blogDetails);
          Swal.fire({
            title: "Success Your Submit!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  return (
    <div className="flexcode-container">
      <section className="py-6 bg-[#1e2d40] text-white rounded-md ">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium text-center tracki uppercase dark:text-violet-400">
              Share your knowledge with other
            </p>
            <h1 className="py-2 text-3xl font-semibold leadi title-font">
              Write your blog share your experience
            </h1>
          </div>

        </div>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto my-5 ">
        <div className="-mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Your Name
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                defaultValue={user?.displayName}
                readOnly
                type="text"
                className="w-full -ml-10 pl-10 pr-3 bg-[#1e2d40] py-2 rounded-lg border-2 text-white border-gray-500 outline-none focus:border-[#00ffc3]"
                placeholder="John doe"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Title
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Write your blog title"
                {...register("title", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Image url
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="url"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Keep a image url"
                {...register("imageUrl", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-12">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Blog Details
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <textarea
                rows={7}
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2  text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Write details your blog"
                {...register("details", { required: true })}
              />
            </div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              type="submit"
              className="block w-full max-w-xs mx-auto bg-[#1da888] hover:bg-[#2bd1aa] hover:btn-outline focus:bg-[#2c3533] text-white rounded-lg px-3 py-3 font-semibold"
            >
              DONE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
