import React, { useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./AddBlog.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import PageBannerTitle from "../../../components/BannerTitle/PageBannerTitle";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [editorState, setEditorState] = useState("");
  const [axiosSecure] = useAxiosSecure();

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorState(content);
  };

  useEffect(() => {
    const quill = new Quill("#editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3] }],
          ["bold", "italic", "underline"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          [{ code: "inline" }],
          ["clean"],
        ],
      },
      theme: "snow",
      formats: {
        fontSize: "58px",
      },
    });
    quill.on("text-change", (delta, oldDelta, source) => {
      handleEditorChange(quill.root.innerHTML, delta, source, quill);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(editorState);
    const blogDetails = {
      ...data,
      details: editorState,
      userImage: user?.photoURL,
      userName: user?.displayName,
    };
    axiosSecure.post("/blog", blogDetails).then((data) => {
      if (data.message === "success") {
        toast.success("Submitted your blog successfully");
        reset();
      }
    });
  };

  return (
    <motion.div
      key="flex_0473hdblnvk33"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="py-5 px-10"
    >
      <div>
        <PageBannerTitle
          title="Add Blogs"
          shortDesc={"Share your knowledge with everyone"}
          btnLink={"/blog"}
          btnText1={"Our Blogs"}
          btnText2={"View All Blogs"}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 mx-auto my-5 ">
        <div className="">
          <div className="w-full mb-5">
            <label htmlFor="" className="font-medium p-1">
              Your Name
            </label>
            <div className="flex">
              <input
                defaultValue={user?.displayName}
                readOnly
                type="text"
                className="w-full px-8 py-3 bg-[#1e2d40] rounded-xl border text-white border-slate-500 outline-none"
                placeholder="John doe"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full mb-5">
            <label htmlFor="" className="font-medium p-1">
              Title
            </label>
            <div className="flex">
              <input
                type="text"
                className="w-full px-8 py-3 rounded-xl text-white border border-slate-500 bg-[#1e2d40] outline-none focus:border-[#0fcda156] hover:border-[#0fcda156]"
                placeholder="Write your blog title"
                {...register("title", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full mb-5">
            <label htmlFor="" className="font-medium p-1">
              Image url
            </label>
            <div className="flex">
              <input
                type="url"
                className="w-full pl-8 py-3 rounded-xl border text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#0fcda156] hover:border-[#0fcda156]"
                placeholder="Keep a image url"
                {...register("imageUrl", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full mb-12">
            <label htmlFor="" className="font-medium p-1">
              Blog Details
            </label>
            <div className="flex">
              <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-500 hover:border-[#0fcda156]">
                <div id="editor" style={{ height: "100%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full mb-5">
            <button
              type="submit"
              className="w-full mx-auto flexcode-button px-3 py-3"
            >
              DONE
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default AddBlog;
