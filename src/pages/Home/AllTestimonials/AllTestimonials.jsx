import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaUserCircle } from 'react-icons/fa';
import './AllTestimonials.css';
import FlexcodeLoading from '../../../components/FlexcodeLoading/FlexcodeLoading';
import useAxiosNormal from '../../../Hooks/useAxiosNormal';
import PageBannerTitle from '../../../components/BannerTitle/PageBannerTitle';

const AllTestimonials = () => {
    const [feedback, setFeedback] = useState([]);
    const [axiosNormal] = useAxiosNormal();

    useEffect(() => {
        axiosNormal.get('/feedback')
            .then(data => {
                setFeedback(data)
            })
    }, [])

    if (feedback.length > 0) {
        return (
            <section className='flexcode-container'>
                <PageBannerTitle
                    title='All Testimonials'
                    shortDesc='A testimonial is a statement from a past customer that describes how a product or service helped them.'
                    btnLink='/feedback'
                    btnText1='Share you experiance'
                    btnText2='Leave Feedback'
                />
                <div className='test1 min-h-[70vh] pt-16'>
                    {
                        feedback.map(review => (
                            <div key={review._id} className='box exploreCard transition-all duration-300 border border-slate-500 hover:border-[#0fcda156] mb-[15px] shadow-2xl break-inside-avoid rounded-xl text-white py-6 '>
                                <div className="flex px-5">
                                    {review?.image ? (
                                        <img src={review.image} className="overflow-hidden object-cover rounded-full w-12 h-12" />
                                    ) : (
                                        <FaUserCircle className="text-[#0fcda1] w-12 h-12" />
                                    )}
                                    <div className="flex-grow pl-3">
                                        <div className="flex justify-between">
                                            <div>
                                                <h6 className="font-bold inline text-md">
                                                    {review?.userName}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="text-sm text-slate-300 ">
                                            <a className="lowercase">
                                                @{review?.username || "username"}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex px-5 mt-2">
                                    <div className="tweet-text text-md">
                                        <p style={{ '--link-color': '#5d5dff' }}>
                                            {review?.details}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex justify-between px-5 mt-2">
                                    <div className="inline-flex items-center text-sm text-gray-600 mt-2">
                                        <Rating initialRating={review?.rating} readonly className="flex items-center justify-center"
                                            emptySymbol={<FaRegStar className="text-lg mr-3 text-amber-500" />}
                                            fullSymbol={<FaStar className="text-lg mr-3 text-amber-500" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </section>
        )
    } else {
        return <FlexcodeLoading />
    }
};

export default AllTestimonials;