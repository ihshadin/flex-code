import React, { useEffect, useState } from "react";
import image1 from "../../../public/image-1.jpg";
import BlogCta from "./BlogCta/BlogCta";
import { Link, useNavigation } from "react-router-dom";
import FlexcodeLoading from "../../components/FlexcodeLoading/FlexcodeLoading";

const Blog = () => {
  const user = { role: "admin" };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://flex-code-server.vercel.app/blog')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlogs(data?.result)
      })
  }, [])
  return (
    <section>
      <div className="flexcode-container">
        <div className="max-w-[600px] mx-auto mb-6 md:mb-12 ">
          <h2 className="text-center font-bold text-2xl md:text-4xl text-white">
            Proactive Problem Solving
          </h2>
          <p className="text-white text-center mt-2 md:mt-4">
            Explore our insightful blog, where we dissect challenges, share
            actionable strategies, and empower you to conquer obstacles with
            confidence.
          </p>
        </div>
        <div>
          <BlogCta />
        </div>
        {/* New Blog Articles */}
        <section className=" dark:bg-gray-900">
          <div className="container  mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">

              {/* 1s blog card */}

              {blogs?.map(blog => <div key={blog._id} className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg border border-gray-500 hover:border-[#0fcda1]">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src={blog.imageUrl}
                    alt=""
                  />
                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src={blog.userImage}
                      alt=""
                    />
                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        {blog.userName}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    {blog.title}
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    {blog.details.length > 140 ?
                      (
                        blog.details.slice(0, 140) + '....'
                      ) :
                      blog.details
                    }

                  </p>
                  <Link to={`/blog/${blog._id}`}>
                    <div

                      className="absolute bottom-0 inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </div>
                  </Link>


                </div>
              </div>)
              }
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blog;
