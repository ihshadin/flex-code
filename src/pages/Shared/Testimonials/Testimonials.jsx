import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import reviewImg1 from '../../../../public/20230810_120154.png';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <section>
            <div className='flexcode-container'>
                <h2 className='text-3xl md:text-5xl text-center text-white font-bold'>Inspiring Testimonials</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10 text-white'>Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
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
                        }
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#00ffc3] transition-all duration-300 cursor-pointer'>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Excellent
                            </h2>
                            <p>
                                I've been using this carrier service
                                company for years, and they never disappoint. They always
                                deliver on time, and my goods arrive in perfect condition.
                                Their customer service is also top-notch -
                                they are always friendly and responsive.
                            </p>
                            <h3 className='text-xl font-semibold mt-8 mb-2'>~ Omar Faruq</h3>
                            <div
                                className='w-20 h-20 object-cover rounded-full border-[#00ffc3] bg-secondary-color border absolute'
                            >
                                <img src={reviewImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#00ffc3] transition-all duration-300 cursor-pointer'>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Just Wow!
                            </h2>
                            <p>
                                I've been using this carrier service
                                company for years, and they never disappoint. They always
                                deliver on time, and my goods arrive in perfect condition.
                                Their customer service is also top-notch -
                                they are always friendly and responsive.
                            </p>
                            <h3 className='text-xl font-semibold mt-8 mb-2'>~ Nur Mohammad Sakib</h3>
                            <div
                                className='w-20 h-20 object-cover rounded-full border-[#00ffc3] bg-secondary-color border absolute'
                            >
                                <img src={reviewImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#00ffc3] transition-all duration-300 cursor-pointer'>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Beautiful
                            </h2>
                            <p>
                                I've been using this carrier service
                                company for years, and they never disappoint. They always
                                deliver on time, and my goods arrive in perfect condition.
                                Their customer service is also top-notch -
                                they are always friendly and responsive.
                            </p>
                            <h3 className='text-xl font-semibold mt-8 mb-2'>~ Abu Sayeed</h3>
                            <div
                                className='w-20 h-20 object-cover rounded-full border-[#00ffc3] bg-secondary-color border absolute'
                            >
                                <img src={reviewImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#00ffc3] transition-all duration-300 cursor-pointer'>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Excellent
                            </h2>
                            <p>
                                I've been using this carrier service
                                company for years, and they never disappoint. They always
                                deliver on time, and my goods arrive in perfect condition.
                                Their customer service is also top-notch -
                                they are always friendly and responsive.
                            </p>
                            <h3 className='text-xl font-semibold mt-8 mb-2'>~ Mehedi Hasan Foysal</h3>
                            <div
                                className='w-20 h-20 object-cover rounded-full border-[#00ffc3] bg-secondary-color border absolute'
                            >
                                <img src={reviewImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#00ffc3] transition-all duration-300 cursor-pointer'>
                            <h2 className='text-2xl font-semibold mb-5'>
                                Excellent
                            </h2>
                            <p>
                                I've been using this carrier service
                                company for years, and they never disappoint. They always
                                deliver on time, and my goods arrive in perfect condition.
                                Their customer service is also top-notch -
                                they are always friendly and responsive.
                            </p>
                            <h3 className='text-xl font-semibold mt-8 mb-2'>~ Zahid Hasan Zarif</h3>
                            <div
                                className='w-20 h-20 object-cover rounded-full border-[#00ffc3] bg-secondary-color border absolute'
                            >
                                <img src={reviewImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </section>
    );
};

export default Testimonials;