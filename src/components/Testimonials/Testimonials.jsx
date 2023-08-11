import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import reviewImg1 from '../../../public/20230810_120154.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section className='py-10 px-3 md:py-20'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl text-center text-white font-bold'>Inspiring Testimonials</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10 text-white'>Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
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
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <p className='testimonial-text-arrow relative bg-slate-200 sphere-primary px-3 py-5 rounded-lg'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            </p>
                            <div className='flex items-center justify-center gap-5 mt-6'>
                                <img className='w-16 h-16 object-cover rounded-full border-[#00ffc3] border' src={reviewImg1} alt="" />
                                <h4 className='text-xl md:text-2xl text-white font-semibold'>Abu Sayeed</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className='testimonial-text-arrow relative bg-slate-200 sphere-primary px-3 py-5 rounded-lg'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            </p>
                            <div className='flex items-center justify-center gap-5 mt-6'>
                                <img className='w-16 h-16 object-cover rounded-full border-[#00ffc3] border' src={reviewImg1} alt="" />
                                <h4 className='text-xl md:text-2xl text-white font-semibold'>Abu Sayeed</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className='testimonial-text-arrow relative bg-slate-200 sphere-primary px-3 py-5 rounded-lg'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            </p>
                            <div className='flex items-center justify-center gap-5 mt-6'>
                                <img className='w-16 h-16 object-cover rounded-full border-[#00ffc3] border' src={reviewImg1} alt="" />
                                <h4 className='text-xl md:text-2xl text-white font-semibold'>Abu Sayeed</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className='testimonial-text-arrow relative bg-slate-200 sphere-primary px-3 py-5 rounded-lg'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            </p>
                            <div className='flex items-center justify-center gap-5 mt-6'>
                                <img className='w-16 h-16 object-cover rounded-full border-[#00ffc3] border' src={reviewImg1} alt="" />
                                <h4 className='text-xl md:text-2xl text-white font-semibold'>Abu Sayeed</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </section>
    );
};

export default Testimonials;