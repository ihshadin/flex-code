import React from 'react';
import logo from '../../../assets/flex-code1.png'
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Submitted successfully. We will contact you ASAP.")
        e.target.reset()
    };

    return (
        <footer className='bg-secondary-color'>
            <div className='flexcode-container'>
                <div className="flex flex-col md:flex-row justify-between gap-5 text-white mb-5 pt-10 md:pt-0">
                    <div className='w-full md:w-2/6 text-center mb-3 md:mb-0'>
                        <div>
                            <img src={logo} alt="logo" className="w-[11rem] mx-auto md:mx-0 pb-2" />
                        </div>
                        <p className="mt-3 text-sm text-white md:text-left">
                            FlexCode is a problem-solving platform that helps coding enthusiasts improve their skills through engaging challenges and interactive learning. Keep an eye on tech news sources and programming blogs, as they might cover new and emerging platforms.
                        </p>
                    </div>
                    <div className='w-full md:w-2/6 flex justify-between'>
                        <div className='w-1/2 flex flex-col'>
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
                        <div className='w-1/2 flex flex-col gap-1'>
                            <span className="font-semibold text-xl mb-2">Legal</span>
                            <a className="link link-hover mb-1">Terms of use</a>
                            <a className="link link-hover mb-1">Privacy policy</a>
                            <a className="link link-hover mb-1">Cookie policy</a>
                            <a className="link link-hover mb-1">Disclaimer</a>
                            <a className="link link-hover mb-1">Legal Jurisdiction</a>
                            <a className="link link-hover mb-1">Copyright Notice</a>
                            <a className="link link-hover mb-1">GDPR Compliance</a>
                        </div>
                    </div>
                    <div className='w-full md:w-2/6'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            Contact Us
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-3 mb-3'>
                                <div>
                                    <label htmlFor="con_name" className="text-sm font-medium p1 block">Your name</label>
                                    <input type="text" id='con_name' className="w-full block px-5 py-1 rounded-lg border border-slate-500 bg-secondary-color outline-none focus:border-[#0fcda1]" placeholder="John doe" required />
                                </div>
                                <div>
                                    <label htmlFor="con_email" className="text-sm font-medium p1 block">Your Email</label>
                                    <input type="email" id='con_email' className="w-full block px-5 py-1 rounded-lg border border-slate-500 bg-secondary-color outline-none focus:border-[#0fcda1]" placeholder="example@gmail.com" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="con_message" className="text-sm font-medium p1 block">Message</label>
                                <textarea rows={3} id='con_message' className="w-full block px-5 py-1 rounded-lg border border-slate-500 bg-secondary-color outline-none focus:border-[#0fcda1]" placeholder="Write you Message" />
                            </div>
                            <div className="mt-3 text-right">
                                <input value="Submit" type="submit" className="flexcode-button text-xs !font-medium !border py-1 px-5" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex bg-[#1e2d40] flex-col-reverse justify-between pt-5 border-t lg:flex-row border-[#0fcda156]">
                    <p className="text-sm text-gray-300 md:pl-10 px-10">© Copyright 2023 Company. All rights reserved.</p>
                    <ul className="flex mb-3 lg:mb-0 space-x-5 sm:flex-row md:pr-16 px-10">
                        <li>
                            <span className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                Privacy &amp; Cookies Policy
                            </span>
                        </li>
                        <li>
                            <span className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                Disclaimer
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;