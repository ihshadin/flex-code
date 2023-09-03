import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigation, useParams } from "react-router-dom";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";

const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/${id}`)
      .then((data) => {
        setData(data?.data?.result);
        setLoading(false);
      })
  }, [id]);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/blog")
      .then((data) => {
        setBlogs(data?.data);
      });
  }, []);

  return (
    <section>
      <div className="flexcode-container">
        <div className="lg:flex lg:-mx-6">
          {/* Single Blog details side */}

          <div className="lg:w-3/4 lg:px-10  bg-[#1e2d40] py-10 mx-6 md:px-6 rounded-xl">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={data?.imageUrl}
              alt=""
            />

            <div>
              <p className="mt-6 text-sm text-white uppercase">
                Want to know
              </p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-[#08ecb8] dark:text-white">
                {data?.title}
              </h1>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={data?.userImage}
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="text-sm text-white dark:text-gray-200">
                    {data?.userName}
                  </h1>
                  <p className="text-sm text-white dark:text-gray-400">
                    Author
                  </p>
                </div>
              </div>
              <p className=" text-white mt-5 text-justify mb-10">
                {data?.details}
              </p>
            </div>
          </div>

          {/* List of Blog Side side */}
          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            {blogs?.map((blog) => (
              <div key={blog._id}>
                <h3 className="text-[#08ecb8] capitalize">
                  Design instument
                </h3>
                <Link to={`/blog/${blog._id}`}>
                  <h2
                    href="#"
                    className="block mt-2 font-medium text-white hover:underline hover:text-gray-500 dark:text-gray-400 "
                  >
                    {blog?.title}
                  </h2>
                </Link>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
