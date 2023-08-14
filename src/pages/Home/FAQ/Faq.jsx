import React from 'react';
import Container from '../../Shared/Container/Container';

const Faq = () => {
    return (
        <section className='w-full'>
            <div class="relative flex-container bg-[#17181b]  pt-10 pb-8 my-8 ring-1 ring-gray-900/5  text-white">
                <div class="">
                    <div class="flex flex-col items-center">
                        <h2 class="mt-2 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                        <p class="mt-3 text-lg text-neutral-400 md:text-xl">Frequenty asked questions

                        </p>
                    </div>
                    <div class="mx-auto mt-8 grid  divide-y divide-[#00ffc3]">
                        <div class="py-5 px-2">
                            <details class="group">
                                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>What is FlexCode?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="group-open:animate-fadeIn mt-3 text-white">FlexCode is a problem-solving platform that helps coding enthusiasts improve their skills through engaging challenges and interactive learning.
                                </p>
                            </details>
                        </div>
                        <div class="py-5 px-2">
                            <details class="group">
                                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>How do I join FlexCode?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="group-open:animate-fadeIn mt-3 text-white"> Joining FlexCode is easy! Simply sign up for an account, and you'll have access to a wide range of coding challenges and features.
                                </p>
                            </details>
                        </div>
                        <div class="py-5 px-2">
                            <details class="group">
                                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Is FlexCode suitable for beginners?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="group-open:animate-fadeIn mt-3 text-white">Yes, FlexCode is designed for all skill levels, including beginners. Our platform provides challenges and resources that cater to both newcomers and experienced coders.
                                </p>
                            </details>
                        </div>
                        <div class="py-5 px-2">
                            <details class="group">
                                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Are there any membership fees?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="group-open:animate-fadeIn mt-3 text-white">FlexCode offers a free basic membership with access to a selection of challenges. We also have a premium membership that provides access to our full range of challenges, advanced features, and personalized learning paths.
                                </p>
                            </details>
                        </div>
                        <div class="py-5 px-2">
                            <details class="group">
                                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>How often are new challenges added?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="group-open:animate-fadeIn mt-3 text-white"> We regularly update FlexCode with new challenges to keep the content fresh and engaging. You can expect new challenges to be added on a weekly basis, offering you a continuous learning experience.
                                </p>
                            </details>
                        </div>
                        <div class="py-5 px-2">
                            <details class="group">
                                <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Can I collaborate with other users on challenges?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="group-open:animate-fadeIn mt-3 text-white">Absolutely! FlexCode encourages collaboration among users. You can team up with others, tackle challenges together, and even join coding communities to learn and grow with fellow enthusiasts.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;