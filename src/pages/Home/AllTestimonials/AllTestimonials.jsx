import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../../public/code-flex.png'
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaUserCircle } from 'react-icons/fa';
import './AllTestimonials.css';
import FlexcodeLoading from '../../../components/FlexcodeLoading/FlexcodeLoading';
import { Link } from 'react-router-dom';

const AllTestimonials = () => {

    const [feedback, setFeedback] = useState([]);
    console.log(feedback);

    const { user } = useContext(AuthContext);
    console.log(user);

    useEffect(() => {
        axios.get('https://flex-code-server.vercel.app/feedback')
            .then(data => {
                setFeedback(data?.data?.result)
            })
    }, [])

    if (feedback.length > 0) {

        return (
            <section className='flexcode-container'>
                <div className='border-b-2 border-[#0fcda185] pb-3 mb-10'>
                    <h1 className='text-white text-2xl md:text-4xl tracking-wider font-semibold'>All Testimonials</h1>
                    <p className='text-slate-300 text-sm md:text-base mt-1'>A testimonial is a statement from a past customer that describes how a product or service helped them.</p>
                </div>
                <div className='test1 min-h-[70vh]'>
                    {
                        feedback.map(review => <div key={review._id} className='box bg-secondary-color shadow-2xl rounded-lg text-white py-6 '>
                            <div className="flex px-5">

                                {review?.image ? (
                                    <img src={review.image} className="overflow-hidden rounded-full w-12 h-12"
                                        style={{ minWidth: '3rem' }} />
                                ) : (
                                    <FaUserCircle className=" text-[#0fcda1] text-3xl w-[78px] h-[78px]" />
                                )}
                                <div className="flex-grow pl-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <h6 className="font-bold inline text-md">
                                                <a>
                                                    {review?.userName}
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="text-sm text-slate-300 ">
                                        <a className="lowercase">
                                            @{review?.userName}
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
                    }
                </div>
            </section>
        )
    } else {
        return <FlexcodeLoading />
    }
};

export default AllTestimonials;