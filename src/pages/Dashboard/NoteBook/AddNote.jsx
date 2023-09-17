import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import handWithPen from '../../../assets/images/hand-with-pen4.png'
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import { AuthContext } from "../../../providers/AuthProvider";
import PageBannerTitle from "../../../components/BannerTitle/PageBannerTitle";

const AddNode = () => {
	const { user } = useContext(AuthContext);
	const { register, handleSubmit, reset } = useForm();
	const [axiosNormal] = useAxiosNormal();

	const onSubmit = (data) => {
		const nodeInfo = {
			...data,
			date: new Date(),
			userEmail: user?.email
		};
		axiosNormal.post("/notebooks", nodeInfo)
			.then((data) => {
				if (data.message === "success") {
					Swal.fire({
						title: "Success Your Submit!",
						text: "Hurrey! You keep your note.",
						icon: "success",
						confirmButtonText: "OK",
					});
					reset();
				}
			});
	};

	return (
		<section>
			<Helmet title="Flex Code | Add Note"/>
			<div className="flexcode-container !pt-16 md:!pt-10">
				<PageBannerTitle
					title='Write your Notes Notes'
					shortDesc='A notebook is a blank book that you can write in and save it.'
					btnLink='/notebooks'
					btnText1='My NoteBooks'
					btnText2='View All NoteBooks'
				/>
				<div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 justify-between py-10 md:py-20">
					<div className="w-full md:w-3/6">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="w-full mb-5">
								<label htmlFor="title" className="font-medium p-1">
									Title
								</label>
								<input
									className="w-full px-8 py-2 bg-secondary-color rounded-lg border-2 text-white border-gray-500 outline-none focus:border-[#0fcda1]"
									type="text"
									name="title"
									{...register("title", { required: true })}
									id=""
									placeholder="Title"
								/>
							</div>
							<div className="w-full mb-5">
								<label htmlFor="" className="font-medium p-1">
									Save Nodebook info
								</label>
								<textarea
									rows={7}
									className="w-full px-8 py-2 bg-secondary-color rounded-lg border-2 text-white border-gray-500 outline-none focus:border-[#0fcda1]"
									placeholder="Write your notes in details"
									{...register("details", { required: true })}
								/>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="flexcode-button py-3 px-10"
								>
									Save Notes
								</button>
							</div>
						</form>
					</div>
					<div className="w-full md:w-3/6">
						<img className="w-4/5 mx-auto md:ml-auto" src={handWithPen} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddNode;
