import { useState, useEffect } from "react";
import { Link, useNavigation, useParams } from "react-router-dom";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";

const SingleBlog = () => {
  const { id } = useParams();
  const [axiosNormal] = useAxiosNormal();
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosNormal.get(`/blog/${id}`)
      .then((data) => {
        setSingleBlog(data);
        setIsLoading(false);
      })
  }, [id]);

  useEffect(() => {
    axiosNormal.get('/blog')
      .then((data) => {
        setBlogs(data.data);
        setIsLoading(false);
      })
  }, []);


  if (isloading) {
    return <FlexcodeLoading />;
  }

  return (
    <section>
      <div className="flexcode-container">
        <div className="lg:flex">

          {/* Single Blog details side */}
          <div className="lg:w-[70%] lg:px-10 bg-secondary-color md:py-10 md:px-6 rounded-xl">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={singleBlog?.imageUrl}
              alt="Blog Image"
            />
            <div className="p-3 md:p-0">
              <p className="md:mt-6 text-sm text-white uppercase">
                Want to know
              </p>
              <h1 className="mt-2 md:mt-4 text-lg md:text-2xl font-semibold leading-tight primary-color">
                {singleBlog?.title}
              </h1>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={singleBlog?.userImage}
                  alt={singleBlog?.userName}
                />
                <div className="mx-4">
                  <h1 className="text-sm text-white">
                    {singleBlog?.userName}
                  </h1>
                  <p className="text-sm text-white">
                    Author
                  </p>
                </div>
              </div>
              <p className=" text-white mt-5 text-justify mb-5" dangerouslySetInnerHTML={{__html: singleBlog?.details}}/>
                
            </div>
          </div>

          {/* List of Blog Side side */}
          <div className="mt-8 lg:w-[30%] lg:mt-0 lg:px-6">
            <h2 className="text-2xl font-semibold pb-5">Recent Blogs</h2>
            {blogs?.slice(0, 5).map((blog) => (
              <div key={blog._id}>
                <Link to={`/blog/${blog._id}`}>
                  <h2 className="block mt-2 font-medium text-white hover:underline hover:text-[#0fcda1]">
                    {blog?.title}
                  </h2>
                </Link>
                <p className="text-sm text-slate-400 pt-1">{blog.details.length > 50 ? blog.details.slice(0, 50) : blog.details}</p>
                <hr className="my-6 border border-[#0fcda18c]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
