import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import handWithPen from '../../../assets/images/hand-with-pen4.png'

const AddNode = () => {
	const { register, handleSubmit, reset } = useForm();


	const onSubmit = (data) => {
		const nodeInfo = {
			...data,
		};
		fetch("http://localhost:5000/notebooks", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(nodeInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === "success") {
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
		<section>
			<div className="flexcode-container">
				<div className='border-b-2 border-[#0fcda185] pb-3 flex justify-between items-center'>
					<div>
						<h1 className='text-white text-2xl md:text-4xl tracking-wider font-semibold'>Write your Notes</h1>
						<p className='text-slate-300 text-sm md:text-base mt-1'>A notebook is a blank book that you can write in and save it.</p>
					</div>
					<Link to='/notebooks' className=''>
						<button className="inline-flex items-center gap-5 px-5 py-3 group rounded-xl bg-gradient-to-tr from-[#1e2d4056] to-[#0fcda122] border border-gray-500 hover:border-[#0fcda1] focus:border focus:border-[#0fcda1] text-white">
							<svg className='w-10' fill="#0fcda1" version="1.1" id="Capa_1" viewBox="0 0 487.168 487.168" space="preserve">
								<g>
									<path d="M28.424,251.013c0.009,0.086,0.026,0.17,0.037,0.256c0.029,0.239,0.06,0.477,0.106,0.713c0.015,0.073,0.037,0.145,0.053,0.218c0.054,0.246,0.111,0.491,0.184,0.734c0.016,0.052,0.037,0.102,0.054,0.154c0.083,0.259,0.171,0.516,0.275,0.769c0.015,0.035,0.033,0.069,0.048,0.104c0.112,0.263,0.232,0.524,0.368,0.779c0.021,0.04,0.047,0.077,0.069,0.116c0.134,0.244,0.274,0.485,0.431,0.72c0.064,0.096,0.139,0.187,0.207,0.281c0.122,0.17,0.24,0.342,0.375,0.506c0.211,0.259,0.435,0.508,0.673,0.746l48.49,48.489c1.953,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143l-41.419-41.419l38.097-38.097c1.875-1.876,2.929-4.419,2.929-7.071s-1.054-5.195-2.929-7.071L52.518,159.7L188.077,24.143l79.249,79.249c3.906,3.904,10.238,3.905,14.143,0c3.905-3.905,3.905-10.237,0-14.143l-86.32-86.32C193.272,1.054,190.729,0,188.077,0s-5.196,1.054-7.071,2.929l-149.701,149.7c-0.236,0.237-0.459,0.484-0.669,0.74c-0.175,0.213-0.333,0.435-0.487,0.658c-0.03,0.044-0.065,0.084-0.095,0.129c-0.175,0.261-0.333,0.53-0.481,0.804c-0.006,0.011-0.014,0.021-0.019,0.033c-0.147,0.275-0.278,0.555-0.397,0.84c-0.006,0.015-0.014,0.029-0.02,0.043c-0.11,0.268-0.205,0.54-0.292,0.814c-0.012,0.037-0.027,0.073-0.038,0.11c-0.077,0.254-0.137,0.512-0.193,0.771c-0.013,0.061-0.032,0.121-0.044,0.182c-0.049,0.247-0.081,0.495-0.111,0.744c-0.009,0.076-0.025,0.15-0.033,0.226c-0.032,0.325-0.048,0.651-0.048,0.977v90.337c0,0.009,0.001,0.017,0.001,0.025C28.378,250.38,28.393,250.697,28.424,251.013z M48.376,225.894v-42.052l21.026,21.026L48.376,225.894z" />
									<path d="M308.373,219.235c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l99.514-99.514c19.677-19.679,19.677-51.696,0-71.375c-9.521-9.52-22.194-14.763-35.688-14.763s-26.167,5.243-35.688,14.763l-99.514,99.514c-3.905,3.905-3.905,10.237,0,14.143l0.266,0.266L67.414,346.262c-28.386,28.386-40.506,57.113-32.909,75.466l-14.784,14.785c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929l14.806-14.807c3.241,1.342,7.234,2.281,12.095,2.28c5.049,0,11.024-1.007,18.038-3.608c14.304-5.307,29.972-16.22,45.312-31.559l183.993-183.993L308.373,219.235z M364.797,62.489c5.742-5.742,13.394-8.905,21.545-8.905s15.803,3.163,21.545,8.905c11.88,11.88,11.88,31.21,0,43.09l-92.442,92.443l-0.247-0.247c-0.006-0.007-0.012-0.014-0.018-0.02c-0.006-0.006-0.014-0.012-0.02-0.018l-14.188-14.189l95.244-95.244c3.905-3.905,3.905-10.237,0-14.143c-3.906-3.904-10.236-3.904-14.143,0l-95.244,95.244l-14.198-14.198c-0.003-0.003-0.006-0.007-0.009-0.01s-0.007-0.006-0.01-0.009l-0.256-0.256L364.797,62.489z M71.846,415.77c-8.152,3.023-14.709,3.138-17.543,0.303c-5.414-5.414-0.816-24.628,20.381-48.398L102.7,395.69C91.932,405.286,81.196,412.301,71.846,415.77z M117.043,381.748l-28.415-28.415l176.921-176.921l7.136,7.136l-6.556,6.556c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l6.556-6.556l7.136,7.136L117.043,381.748z" />
									<path d="M467.447,275.229l-86.32-86.32c-3.906-3.904-10.236-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l79.249,79.249L265.508,463.025l-86.587-86.587c-3.905-3.904-10.237-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l93.658,93.658c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l194.868-194.868C471.352,285.466,471.352,279.134,467.447,275.229z" />
								</g>
							</svg>
							<span className="flex flex-col gap-1 items-start">
								<span className="text-xs text-slate-300">My NoteBooks</span>
								<span className="font-semibold title-font">View All NoteBooks</span>
							</span>
						</button>
					</Link>
				</div>
				<div className="flex gap-20 justify-between py-20">
					<div className="w-3/6">
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
					<div className="w-3/6">
						<img className="w-4/5 ml-auto" src={handWithPen} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddNode;