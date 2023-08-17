import React from 'react';
import faqImg from '../../../assets/faq.jpg'

const Faq = () => {
    return (
        <section className='w-full'>
            <div className="flexcode-container relative bg-[#17181b] ring-1 ring-gray-900/5  text-white">
                <div className="">
                    <div className="flex flex-col items-center">
                        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                        <p className="mt-3 text-lg text-neutral-400 md:text-xl">Frequenty asked questions

                        </p>
                    </div>
                    <div className='md:flex justify-center items-center gap-10'>
                        <div className="mx-auto md:w-[50%] mt-8 grid  divide-y divide-[#00ffc3]">
                            <div className="py-5 px-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>What is FlexCode?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-white">FlexCode is a problem-solving platform that helps coding enthusiasts improve their skills through engaging challenges and interactive learning.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5 px-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>How do I join FlexCode?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-white"> Joining FlexCode is easy! Simply sign up for an account, and you'll have access to a wide range of coding challenges and features.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5 px-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>Is FlexCode suitable for beginners?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-white">Yes, FlexCode is designed for all skill levels, including beginners. Our platform provides challenges and resources that cater to both newcomers and experienced coders.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5 px-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>Are there any membership fees?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-white">FlexCode offers a free basic membership with access to a selection of challenges. We also have a premium membership that provides access to our full range of challenges, advanced features, and personalized learning paths.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5 px-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>How often are new challenges added?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-white"> We regularly update FlexCode with new challenges to keep the content fresh and engaging. You can expect new challenges to be added on a weekly basis, offering you a continuous learning experience.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5 px-2">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span>Can I collaborate with other users on challenges?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-white">Absolutely! FlexCode encourages collaboration among users. You can team up with others, tackle challenges together, and even join coding communities to learn and grow with fellow enthusiasts.
                                    </p>
                                </details>
                            </div>
                        </div>
                        <div className='md:w-[40%] mt-8'>
                            <img className='rounded-lg' src={faqImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;