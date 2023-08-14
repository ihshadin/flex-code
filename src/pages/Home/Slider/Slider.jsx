import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../../../public/image-1.jpg";
import image2 from "../../../../public/image-2.jpg";
import image3 from "../../../../public/image-3.jpg";

const Slider = () => {
  return (
    <div className="mb-15">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[420px] md:h-[600px] w-full object-cover"
              src={image1}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h2 className="text-white section-title text-center">
                Feel like <span className="text-white">coding</span> in your{" "}
                <br /> own environment
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[420px] md:h-[600px] w-full object-cover"
              src={image2}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h2 className="text-white section-title text-center">
                Feel like <span className="text-white">coding</span> in your{" "}
                <br /> own environment
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[420px] md:h-[600px] w-full object-cover"
              src={image3}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h2 className="text-white section-title text-center">
                Feel like <span className="text-white">coding</span> in your{" "}
                <br /> own environment
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
