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
        <div>
            <footer className="footer p-10 bg-[#1e2d40] text-white">
                <div className="sm:col-span-2">
                    <div>
                        <img src={logo} alt="logo" className="w-[11rem]" />
                    </div>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-white">
                            FlexCode is a problem-solving platform that helps coding enthusiasts improve their skills through engaging challenges and interactive learning. Keep an eye on tech news sources and programming blogs, as they might cover new and emerging platforms.
                        </p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover mb-1">Branding</a>
                    <a className="link link-hover mb-1">Design</a>
                    <a className="link link-hover mb-1">Marketing</a>
                    <a className="link link-hover mb-1">Advertisement</a>
                    <a className="link link-hover mb-1">Custom Solutions</a>
                    <a className="link link-hover mb-1">Consultation</a>
                    <a className="link link-hover mb-1">Client Testimonials</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover mb-1">About us</a>
                    <a className="link link-hover mb-1">Contact</a>
                    <a className="link link-hover mb-1">Jobs</a>
                    <a className="link link-hover mb-1">Press kit</a>
                    <a className="link link-hover mb-1">Our Team</a>
                    <a className="link link-hover mb-1">Locations</a>
                    <a className="link link-hover mb-1">FAQs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover mb-1">Terms of use</a>
                    <a className="link link-hover mb-1">Privacy policy</a>
                    <a className="link link-hover mb-1">Cookie policy</a>
                    <a className="link link-hover mb-1">Disclaimer</a>
                    <a className="link link-hover mb-1">Legal Jurisdiction</a>
                    <a className="link link-hover mb-1">Copyright Notice</a>
                    <a className="link link-hover mb-1">GDPR Compliance</a>
                </div>
                <div className="w-full ">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-3xl font-bold mb-3">
                            Contact Us
                        </h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-[#00ffc3] font-bold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="border-2 text-neutral  p-2 w-full rounded-md focus:outline-none focus:border-[#00ffc3]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-[#00ffc3] font-bold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="border-2 text-neutral  p-2 w-full rounded-md focus:outline-none focus:border-[#00ffc3]"
                                />
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-[#00ffc3] font-bold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    className="border-2 text-neutral  p-2 w-full rounded-md focus:outline-none focus:border-[#00ffc3]"
                                ></textarea>
                            </div>
                            <div className="col-span-2">
                                <input
                                    value="Submit"
                                    type="submit"
                                    className="btn bg-[#1e2d40]  hover:bg-[#1e2d40] hover:border-2 hover:border-[#00ffc3] hover:text-[#00ffc3] text-white"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
            <div class="flex bg-[#1e2d40] flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row border-[#00ffc3]">
                <p class="text-sm text-gray-300 md:pl-10 px-10">© Copyright 2023 Company. All rights reserved.</p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row md:pr-16 px-10">
                    <li>
                        <a href="#"
                            class="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            &amp; Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;