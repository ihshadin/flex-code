import React from 'react';
import logo from '../../../assets/flex-code1.png'
import Swal from 'sweetalert2';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Success Your Submit!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "OK",
        });
        e.target.reset()
    };
    return (
        <footer className='bg-secondary-color'>
            <div className='flexcode-container'>
                <div className="flex justify-between gap-5 text-white mb-5">
                    <div className='w-2/6'>
                        <div>
                            <img src={logo} alt="logo" className="w-[11rem]" />
                        </div>
                        <p className="mt-3 text-sm text-white">
                            FlexCode is a problem-solving platform that helps coding enthusiasts improve their skills through engaging challenges and interactive learning. Keep an eye on tech news sources and programming blogs, as they might cover new and emerging platforms.
                        </p>
                    </div>
                    <div className='w-1/6 flex flex-col'>
                        <span className="font-semibold text-xl mb-2">Services</span>
                        <a className="link link-hover mb-1">Branding</a>
                        <a className="link link-hover mb-1">Design</a>
                        <a className="link link-hover mb-1">Marketing</a>
                        <a className="link link-hover mb-1">Advertisement</a>
                        <a className="link link-hover mb-1">Custom Solutions</a>
                        <a className="link link-hover mb-1">Consultation</a>
                        <a className="link link-hover mb-1">Client Testimonials</a>
                    </div>
                    {/* <div>
                        <span className="">Company</span>
                        <a className="link link-hover mb-1">About us</a>
                        <a className="link link-hover mb-1">Contact</a>
                        <a className="link link-hover mb-1">Jobs</a>
                        <a className="link link-hover mb-1">Press kit</a>
                        <a className="link link-hover mb-1">Our Team</a>
                        <a className="link link-hover mb-1">Locations</a>
                        <a className="link link-hover mb-1">FAQs</a>
                    </div> */}
                    <div className='w-1/6 flex flex-col gap-1'>
                        <span className="font-semibold text-xl mb-2">Legal</span>
                        <a className="link link-hover mb-1">Terms of use</a>
                        <a className="link link-hover mb-1">Privacy policy</a>
                        <a className="link link-hover mb-1">Cookie policy</a>
                        <a className="link link-hover mb-1">Disclaimer</a>
                        <a className="link link-hover mb-1">Legal Jurisdiction</a>
                        <a className="link link-hover mb-1">Copyright Notice</a>
                        <a className="link link-hover mb-1">GDPR Compliance</a>
                    </div>
                    <div className='w-2/6'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            Contact Us
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-3 mb-3'>
                                <div>
                                    <label htmlFor="con_name" className="text-sm font-semibold px-1 pb-2 block">Your name</label>
                                    <input type="text" id='con_name' className="w-full block px-6 py-2 rounded-lg border-2 border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]" placeholder="John doe" />
                                </div>
                                <div>
                                    <label htmlFor="con_email" className="text-sm font-semibold px-1 pb-2 block">Your Email</label>
                                    <input type="text" id='con_email' className="w-full block px-6 py-2 rounded-lg border-2 border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]" placeholder="example@gmail.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="con_message" className="text-sm font-semibold px-1 pb-2 block">Message</label>
                                <textarea rows={2} id='con_message' className="w-full block px-6 py-2 rounded-lg border-2 border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]" placeholder="Write you Message" />
                            </div>
                            <div className="mt-3 text-right">
                                <input value="Submit" type="submit" className="flexcode-button py-2 px-4" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex bg-[#1e2d40] flex-col-reverse justify-between pt-5 border-t lg:flex-row border-[#0fcda156]">
                    <p className="text-sm text-gray-300 md:pl-10 px-10">© Copyright 2023 Company. All rights reserved.</p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row md:pr-16 px-10">
                        <li>
                            <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                Privacy &amp; Cookies Policy
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;