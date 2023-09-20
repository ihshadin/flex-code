import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUser, FaUserCircle } from "react-icons/fa";
// import { Pagination } from "swiper";
import reviewImg1 from "/20230810_120154.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [axiosNormal] = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/feedback")
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);

  return (
    <section>
      <div className="flexcode-container">
        <SectionTitle
          title="Inspiring Testimonials"
          descrition="Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class."
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {feedbacks?.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <div className="flexcode-banner-bg p-5 md:p-5 mb-9 rounded-2xl text-white border border-slate-500 hover:border-[#0fcda156] transition-all duration-300 cursor-pointer">
                <h2 className="text-xl font-semibold mb-5 line-clamp-1">
                  {feedback.thumbExpression}
                </h2>
                <p className="line-clamp-6">
                  {
                    feedback.details
                  }
                </p>
                <span className="flex flex-col-reverse mt-8 justify-between">
                  <h3 className="text-xl font-semibold mb-4 line-clamp-1">
                    ~ {feedback.userName}
                  </h3>
                  <Rating
                    initialRating={feedback.rating}
                    readonly
                    className="flex items-center justify-center"
                    emptySymbol={
                      <FaRegStar className="text-lg mr-1 text-amber-500" />
                    }
                    fullSymbol={
                      <FaStar className="text-lg mr-1 text-amber-500" />
                    }
                  />
                </span>
                <div className="w-16 h-16 object-cover rounded-full border-[#0fcda1] bg-secondary-color border absolute bottom-0">
                  {feedback?.image ? (
                    <img src={feedback.image} className="w-full rounded-full p-1" alt="" />
                  ) : (
                    <FaUser className=" text-[#0fcda1] w-full h-full p-1 rounded-full" />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='text-center mt-10'>
          <Link to='/allTestimonials'>
            <button className='flexcode-button px-8 py-3'>
              All Testimonials
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
