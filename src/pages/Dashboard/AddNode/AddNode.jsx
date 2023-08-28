import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddNode = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const nodeInfo = {
            ...data,
        };
        fetch("http://localhost:5000/nodebook", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(nodeInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "success") {
                    console.log(nodeInfo);
                    Swal.fire({
                        title: "Success Your Submit!",
                        text: "Do you want to continue",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                    reset();
                }
            });
    };

    return (
        <div className="mt-10 md:mx-32">
            <section className="py-6 bg-[#1e2d40] text-white rounded-md ">
                <div className="mx-auto flex flex-col justify-around py-4 text-center lg:flex-row">
                    <div className="flex flex-col justify-center lg:text-left">
                        <h1 className="py-2 text-2xl font-semibold leadi title-font">
                            A notebook is a blank book that you can write in and save it.
                        </h1>
                    </div>

                </div>
            </section>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto my-5 ">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                        Title
                    </label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                            className="w-full -ml-10 pl-10 pr-3 bg-[#1e2d40] py-2 rounded-lg border-2 text-white border-gray-500 outline-none focus:border-[#00ffc3]"
                            type="text"
                            name="name"
                            {...register("name", { required: true })}
                            id=""
                            placeholder="title"
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                        Save Nodebook info
                    </label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <textarea
                            rows={7}
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2  text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                            placeholder="Write your node"
                            {...register("details", { required: true })}
                        />
                    </div>
                </div>

                <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                        <button
                            type="submit"
                            className="block w-full max-w-xs mx-auto bg-[#1da888] hover:bg-[#2bd1aa] hover:btn-outline focus:bg-[#2c3533] text-white rounded-lg px-3 py-3 font-semibold"
                        >
                            Save Info
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNode;
