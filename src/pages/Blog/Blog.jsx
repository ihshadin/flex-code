import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import Pagination from "../../components/Pagination/Pagination";
import PageBannerTitle from "../../components/BannerTitle/PageBannerTitle";
import BlogCardLoading from "../../components/FlexcodeLoading/BlogCardLoading";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [axiosNormal] = useAxiosNormal();
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6;
  const [totalBlogs, setTotalBlogs] = useState(0);
  const totalPages = Math.ceil(totalBlogs / itemsPerPage);


  useEffect(() => {
    axiosNormal.get(`/blog?page=${currentPage}&itemsPerPage=${itemsPerPage}`)
      .then(data => {
        setBlogs(data.data)
        setTotalBlogs(data.totalCount)
        setIsLoading(false)
      })
  }, [currentPage, itemsPerPage]);

  return (
    <section>
      <div className="flexcode-container">
        <PageBannerTitle
          title="Read our Blogs gain your knowledge"
          shortDesc="Unlock knowledge and insights with our thought-provoking blogs."
        />
        {/* New Blog Articles */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            isLoading ? (
              <BlogCardLoading />
            ) : (
              blogs?.map(blog => (
                <div key={blog._id} className="flexcode-banner-bg rounded-2xl border border-slate-500 hover:border-[#0fcda156] overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-48 lg:h-60"
                      src={blog.imageUrl}
                      alt="Blog Img"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute -bottom-20 group-hover:bottom-0 flex gap-3 right-0 left-0 p-2 transition-all duration-300 flexcode-banner-bg" style={{ "boxShadow": "0 0 15px 0 rgba(0, 0, 0, 0.5)" }}>
                      <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={blog.userImage}
                        alt=""
                      />
                      <div>
                        <h1 className="text-sm font-semibold text-white">
                          {blog.userName}
                        </h1>
                        <span className="text-sm text-slate-200">
                          Author
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <Link to={`/blog/${blog._id}`}>
                      <h1 className="text-lg md:text-xl font-semibold primary-color">
                        {blog.title}
                      </h1>
                    </Link>

                    <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded my-5"></div>

                    <p className="text-sm text-slate-300 mb-5">
                      {blog.details.length > 140 ? (
                        blog.details.slice(0, 140) + '...'
                      ) : (
                        blog.details
                      )
                      }
                    </p>
                    <Link to={`/blog/${blog._id}`} className="inline-block transition-all duration-300 primary-color text-right tracking-wider btn-effect">
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            )
          }
        </div>
        <Pagination currentPage={currentPage} totalPage={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </section>
  );
};

export default Blog;
