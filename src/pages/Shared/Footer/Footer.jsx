import React, { useRef } from 'react';
import logo from '../../../assets/flex-code1.png'
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import useAxiosNormal from '../../../Hooks/useAxiosNormal';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [axiosNormal] = useAxiosNormal();
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        const conForm = e.target;
        const name = conForm.user_name.value;
        const email = conForm.user_email.value;
        const message = conForm.message.value;

        const contactData = {
            name, email, message
        }

        emailjs.sendForm('service_1u3nstp', 'template_2vzgr9e', form.current, 'CS7gQ2h1oiq4bD8nk')
            .then((result) => {
                toast.success("Submitted successfully. We will contact you ASAP.")
                if (result.text === "OK") {
                    axiosNormal.post('/sendEmail', contactData)
                        .then((data) => {

                        })
                }
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
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
                    <div className='md:w-2/5'>
                        <div className='md:w-3/4 flex flex-col gap-4 md:ml-4'>
                            <span className="text-xl font-semibold md:ml-4 mt-3">Legal</span>
                            <div className='flex md:gap-3 md:ml-4'>
                                <div className=' mt-2 md:mt-4 space-y-3 w-1/2'>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Terms of use</Link>
                                    </p>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Privacy policy</Link>
                                    </p>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Design</Link>
                                    </p>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Services</Link>
                                    </p>
                                </div>
                                <div className='mt-2 md:mt-4  space-y-3 w-1/2'>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Client Testimonials</Link>
                                    </p>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Contact</Link>
                                    </p>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">FlexCode About</Link>
                                    </p>
                                    <p>
                                        <Link to='/allMenuFooter' className="link link-hover mb-1">Copyright Notice</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/6'>
                        <h2 className="text-xl md:text-2xl font-semibold mt-1 mb-3">
                            Contact Us
                        </h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid grid-cols-2 gap-3 mb-3'>
                                <div>
                                    <label htmlFor="con_name" className="text-sm font-medium p1 block">Your name</label>
                                    <input type="text" name="user_name" id='con_name' className="w-full block px-5 py-1 rounded-lg border border-slate-500 bg-secondary-color outline-none focus:border-[#0fcda1]" placeholder="John doe" autoComplete='off' required />
                                </div>
                                <div>
                                    <label htmlFor="con_email" className="text-sm font-medium p1 block">Your Email</label>
                                    <input type="email" name="user_email" id='con_email' className="w-full block px-5 py-1 rounded-lg border border-slate-500 bg-secondary-color outline-none focus:border-[#0fcda1]" placeholder="example@gmail.com" autoComplete='off' required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="con_message" className="text-sm font-medium p1 block">Message</label>
                                <textarea rows={3} name="message" id='con_message' className="w-full block px-5 py-1 rounded-lg border border-slate-500 bg-secondary-color outline-none focus:border-[#0fcda1]" placeholder="Write you Message" required />
                            </div>
                            <div className="mt-3 text-right">
                                <input type="submit" value="Send" className="flexcode-button text-xs !font-medium !border py-1 px-5" />
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
        </footer >
    );
};

export default Footer;