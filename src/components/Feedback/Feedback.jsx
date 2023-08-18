import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
import reviewImg1 from '../../../public/20230810_120154.png';
import { AuthContext } from "../../providers/AuthProvider";

const Feedback = () => {
    const [rating, setRating] = useState(0)
    const [exp, setExp] = useState('')
    const [details, setDetails] = useState('')
    const { user } = useContext(AuthContext)
 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const feedbackDetails = { ...data, rating, image: user?.photoURL, userName: user?.displayName };
        fetch('http://localhost:5000/feedback', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feedbackDetails)
        }).then(res => res.json())
        .then(data => {
            if (data.message === 'success') {
                console.log(feedbackDetails);
                Swal.fire({
                    title: "Success Your Submit!",
                    text: "Do you want to continue",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                reset()
            }
        })

    };
    return (
        <>
            <div className="w-full px-5 md:px-10 flex gap-10 items-center">

                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="" className="text-sm font-semibold px-1">Your name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input defaultValue={user?.displayName} readOnly type="text" className="w-full -ml-10 pl-10 pr-3 bg-[#1e2d40] py-2 rounded-lg border-2 border-gray-500 outline-none focus:border-[#00ffc3]" placeholder="John doe" />
                            </div>
                        </div>

                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="" className="text-sm font-semibold px-1">Your thumb expression</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input onKeyUp={(e) => setExp(e.target.value)} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]" placeholder="Awesome experience" {...register("thumbExpression", { required: true })} />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="" className="text-sm font-semibold px-1">Give your full expression</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <textarea onKeyUp={(e) => setDetails(e.target.value)} rows={5} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]" placeholder="Write details about your experience" {...register("details", { required: true })} />

                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="" className="text-sm font-semibold px-1">Rate Us.</label>
                            <div className="flex">
                                <Rating onClick={(value) => setRating(value)}
                                    emptySymbol={<FaRegStar className="text-3xl mr-3 text-amber-500" />}
                                    fullSymbol={<FaStar className="text-3xl mr-3 text-amber-500" />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button type="submit" className="block w-full max-w-xs mx-auto bg-[#1da888] hover:bg-[#2bd1aa] hover:btn-outline focus:bg-[#2c3533] text-white rounded-lg px-3 py-3 font-semibold">DONE</button>
                        </div>
                    </div>
                </form>
                <section className="w-1/2 -mt-44">
                    <div className='bg-secondary-color p-8 md:p-10 mb-12 rounded-2xl text-white border border-[#1e2d40] hover:border-[#0fcda1] transition-all duration-300 cursor-pointer'>
                        <h2 className='text-2xl font-semibold mb-5'>
                            {exp === '' ? "Your expression" : exp}
                        </h2>
                        <p className="min-h-16">
                            {details === '' ? "Write your experience here..." : details}
                        </p>
                        <span className="flex mt-8 items-center justify-between">
                            <h3 className='text-xl font-semibold  mb-2'>~ {user?.displayName || "Your Name"}</h3>
                            <Rating initialRating={rating} readonly className="flex items-center justify-center"
                                emptySymbol={<FaRegStar className="text-xl mr-3 text-amber-500" />}
                                fullSymbol={<FaStar className="text-xl mr-3 text-amber-500" />}
                            />
                        </span>
                        <div
                            className='w-20 h-20 object-cover rounded-full border-[#0fcda1] bg-secondary-color border absolute'
                        >
                            <img src={user?.photoURL || reviewImg1} className="rounded-full" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Feedback;