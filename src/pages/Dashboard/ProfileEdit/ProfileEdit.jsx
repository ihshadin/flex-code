import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";

import Select from "react-select";
import PageBannerTitle from "../../../components/BannerTitle/PageBannerTitle";

const ProfileEdit = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const inputSkills = selectedSkills?.map((item) => item?.value);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  const option = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "bootstrap", label: "BOOTSTRAP" },
    { value: "tailwind", label: "TAILWIND" },
    { value: "javascript", label: "JAVASCRIPT" },
    { value: "node js", label: "NODE JS" },
    { value: "express js", label: "EXPRESS JS" },
    { value: "mongodb", label: "MONGODB" },
  ];

  const handelUsrUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const username = form.name.value;
    const dateOfBirth = form.date.value;
    const address = form.address.value;
    const mobile = parseInt(form.mobile.value);
    const gender = selectedOption;
    const webSiteLink = form.personal.value;
    const fbLinks = form.facebook.value;
    const LinkLinks = form.linkedin.value;
    const github = form.github.value;
    const skills = inputSkills;

    const addProfilUpdate = {
      address,
      username,
      mobile,
      skills,
      gender,
      email,
      webSiteLink,
      fbLinks,
      LinkLinks,
      github,
      dateOfBirth,
    };
    fetch("http://localhost:5000/users", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProfilUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Your Profile update Successfull!",
            text: "Go to dashboard",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard");
            }
          });
        }
        form.reset();
      });
  };
  return (
    <section className="-mt-10">
      <div className="flexcode-container">
        <div className="flex gap-10">
          <div className="flexcode-banner-bg sticky top-24 p-4 w-80 text-white py-5 rounded-lg h-screen">
            <div className="pt-8 pb-6 mb-4 border-b-2 border-[#0fcda185]">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={user?.photoURL}
                  className="w-[100px] h-[100px] object-cover rounded-full border border-[#0fcda185] p-1 cursor-pointer"
                  alt="profile-user"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl text-white font-semibold">
                  {user?.displayName}
                </h2>
                <p className="text-slate-400">{user?.email}</p>
              </div>
            </div>
            <ul>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40 mt-2"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-300"></span>
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-white hover:text-white hover:bg-[#0fcda1] hover:bg-opacity-40 mt-2"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                  </span>
                  <span>Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center px-4 py-2 text-white hover:bg-[#00ffc3] hover:bg-opacity-40"
                >
                  <span className="mr-2  flex">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  <span>See Your info</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="px-6">
              <PageBannerTitle
                title="Account settings"
                shortDesc={
                  "Let's modify personal info and setting for secure experience."
                }
                btnLink={"/dashboard"}
                btnText1={"View your info"}
                btnText2={"Go to dashboard"}
                btnIcon={
                  <svg className="w-16" fill="#0fcda1" viewBox="0 0 605 429.7">
                    <path
                      d="M302.8,0.2c90.6,0,181.1,0.2,271.7-0.2c17.4-0.1,30.7,12.9,30.6,30.5c-0.3,123-0.2,246-0.2,369c0,18.6-11.4,30-29.8,30
	c-181.6,0-363.1-0.1-544.7,0.2c-17,0-30.4-12.6-30.4-30.2c0.3-123,0.3-246,0-369C0,12.4,13.7-0.1,30.2,0
	C121,0.4,211.9,0.2,302.8,0.2z M302.5,416.8c90.6,0,181.1,0,271.7,0c12.3,0,18-5.6,18-18c0-122.7,0-245.4,0-368.1
	c0-12.1-5.8-17.8-17.7-17.8c-181.3,0-362.5,0-543.8,0c-12,0-17.7,5.7-17.7,17.8c0,122.7,0,245.4,0,368.1c0,12.4,5.6,18,17.9,18
	C121.4,416.8,212,416.8,302.5,416.8z"
                    />
                    <path
                      d="M453.8,344.7c12.7,0,24.5,0,36.9,0c0,10.9,0,21.5,0,32.4c7.4,0,14.2,0,21.7,0c0-19.8,0-39.5,0-59.3c0-19.7,0-39.5,0-59.6
	c12.3,0,24.3,0,36.7,0c0,39.6,0,79.1,0,119.1c7.4,0,14.2,0,21.4,0c0,4.5,0,8.5,0,12.8c-85.1,0-170.1,0-255.4,0c0-4.2,0-8.1,0-12.7
	c7.1,0,14.1,0,21.6,0c0-17.5,0-34.5,0-51.7c12.4,0,24.2,0,36.6,0c0,17.1,0,34.1,0,51.4c7.4,0,14.2,0,21.7,0c0-32.4,0-64.9,0-97.6
	c12.5,0,24.4,0,36.8,0c0,32.4,0,64.8,0,97.5c7.5,0,14.5,0,21.9,0C453.8,366.2,453.8,355.6,453.8,344.7z"
                    />
                    <path
                      d="M252.4,70.1c-8.3,6.8-16,13.3-23.9,19.5c-1,0.8-3.6,0.3-5.1-0.4C202,78.6,179.7,76,156.5,81.6C117.3,91.1,87.9,125,84,165.2
	c-0.3,3-0.5,6-0.6,9c-0.3,9.8-6.8,16.4-16.2,16.2c-8.9-0.2-15.5-7.2-15.3-16.7c0.8-33.5,12.3-62.7,35.4-87.1
	c42-44.2,110.4-52.2,161.5-19C249.9,68.3,250.8,69,252.4,70.1z"
                    />
                    <path
                      d="M295.9,52.6C268.6,89.8,241.3,127,214,164.2c-6.2,8.4-12.2,16.9-18.5,25.2c-5.8,7.7-13.7,10.8-23.1,8.4
	c-9.1-2.3-14.4-8.5-15.9-17.7c-1.4-8.7,2-15.5,8.7-21c18.3-15,36.6-30.1,54.9-45.1c24.3-20.1,48.7-40.1,73-60.2
	c0.8-0.6,1.6-1.2,2.4-1.8C295.6,52.2,295.7,52.4,295.9,52.6z"
                    />
                    <path
                      d="M174.4,368c25.7,0,51.3,0,77,0c7.5,0,11.6,6.1,8.1,12c-1.9,3.3-4.9,4.1-8.5,4c-22-0.1-44.1,0-66.1,0c-28.8,0-57.7,0-86.5,0
	c-1.4,0-2.7,0.1-4.1-0.1c-4.4-0.5-7.4-4-7.2-8.4c0.1-4,3.3-7.3,7.5-7.5c3.2-0.2,6.3-0.1,9.5-0.1C127.6,368,151,368,174.4,368z"
                    />
                    <path
                      d="M173.4,288.3c-24.9,0-49.8,0-74.7,0c-1.7,0-3.3,0.1-5-0.1c-3.7-0.5-6.5-3.7-6.7-7.4c-0.2-3.7,2.3-7.2,6-8
	c1.6-0.3,3.3-0.4,4.9-0.4c50.4,0,100.8,0,151.2,0c1.5,0,3,0,4.5,0.2c4.3,0.6,7.1,4.1,7,8.1c-0.2,4.1-3.3,7.3-7.6,7.5
	c-4.7,0.2-9.4,0.1-14,0.1C217.2,288.3,195.3,288.3,173.4,288.3z"
                    />
                    <path
                      d="M173.4,336.3c-24.9,0-49.8,0-74.7,0c-1.7,0-3.3,0.1-5-0.1c-3.7-0.5-6.5-3.7-6.7-7.4c-0.2-3.7,2.3-7.2,6-8
	c1.6-0.3,3.3-0.4,4.9-0.4c50.4,0,100.8,0,151.2,0c1.5,0,3,0,4.5,0.2c4.3,0.6,7.1,4.1,7,8.1c-0.2,4.1-3.3,7.3-7.6,7.5
	c-4.7,0.2-9.4,0.1-14,0.1C217.2,336.3,195.3,336.3,173.4,336.3z"
                    />
                    <path
                      d="M280.2,96.2c14.3,18.6,22.8,38.9,25.8,61.5c0.7,5.4,1,10.8,1.1,16.2c0.1,9.5-6.1,16.2-14.9,16.5c-9.3,0.3-16.4-6.2-16.5-16
	c-0.1-17.8-4.9-34.2-13.8-49.5c-0.6-1-0.5-3,0.1-3.9C267.9,112.9,273.9,104.8,280.2,96.2z"
                    />
                    <path
                      d="M479.5,185.9c-26.8,0-53.7,0-80.5,0c-1.5,0-3.3,0.5-4.5-0.2c-1.9-1.2-4.7-3-4.8-4.7c-0.1-1.8,2.2-4.1,4-5.5
	c1.1-0.8,3.2-0.3,4.9-0.3c54.4,0,108.9,0,163.3,0c0.9,0,1.8,0,2.7,0c3.7,0.2,6.2,1.7,6.1,5.7c-0.1,3.7-2.7,5.1-6.2,5
	c-11.2,0-22.3,0-33.5,0C513.9,185.9,496.7,185.9,479.5,185.9z"
                    />
                    <path
                      d="M480.1,68.2c-27.1,0-54.3,0-81.4,0c-1.5,0-3.3,0.5-4.4-0.2c-1.8-1.1-4.3-2.9-4.4-4.6c-0.2-1.7,1.9-4,3.5-5.4
	c0.9-0.8,2.9-0.5,4.4-0.5c55.2,0,110.4,0,165.5,0c1.3,0,3.2-0.3,3.9,0.4c1.5,1.5,3.4,3.7,3.4,5.5c0,1.5-2.4,3.3-4.1,4.5
	c-1,0.6-2.6,0.2-4,0.2C535,68.2,507.5,68.2,480.1,68.2z"
                    />
                    <path
                      d="M480.5,146.8c-27.6,0-55.2,0-82.8,0c-1.4,0-3.2,0.4-4-0.2c-1.7-1.5-3.9-3.6-3.9-5.6c0-1.6,2.6-3.4,4.3-4.7
	c0.8-0.6,2.3-0.2,3.5-0.2c55,0,110.1,0,165.1,0c1.1,0,2.5-0.4,3.1,0.1c1.8,1.5,4.2,3.1,4.7,5.1c0.8,3-1.5,5-4.6,5.5
	c-1.3,0.2-2.7,0.1-4.1,0.1C534.8,146.8,507.6,146.8,480.5,146.8z"
                    />
                    <path
                      d="M480.2,97c27.3,0,54.6,0,81.9,0c1.5,0,3.4-0.5,4.4,0.3c1.7,1.1,3.8,2.9,4,4.6c0.1,1.7-1.6,3.9-3.1,5.2
	c-1.1,0.9-3.2,0.7-4.8,0.7c-55,0-110.1,0-165.1,0c-1.6,0-3.7,0.1-4.8-0.7c-1.5-1.3-3.2-3.6-3-5.3c0.2-1.7,2.4-3.4,4.1-4.5
	c1.1-0.7,2.9-0.2,4.4-0.2C425.6,97,452.9,97,480.2,97z"
                    />
                    <path
                      d="M74.3,280.5c-0.1,8.4-6.8,14.9-15,14.8c-8.2-0.1-14.8-7-14.6-15.3c0.2-8.3,7-14.7,15.3-14.5
	C68.1,265.8,74.4,272.4,74.3,280.5z"
                    />
                    <path d="M74.3,328.2c0,8.3-6.8,15.1-14.9,15c-8.2-0.2-15-7.2-14.8-15.2c0.2-8.3,6.9-14.7,15.3-14.6C68.1,313.6,74.4,320,74.3,328.2z" />
                    <path d="M59.4,361.3c8.4-0.1,14.9,6.4,15,14.8c0,8.2-6.3,14.7-14.4,14.9c-8.2,0.2-15.2-6.4-15.3-14.6C44.5,368.1,51,361.4,59.4,361.3z" />
                  </svg>
                }
              />
            </div>
            <form onSubmit={handelUsrUpdate}>
              <div className=" text-gray-200 w-full bg-transparent  border-gray-400 transform-all hover:border-[#0fcda1] p-2  mx-auto">
                <div className="flex mx-auto gap-x-5 p-5 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Your Name</span>
                    </label>
                    <label className="">
                      <input
                        type="text"
                        name="name"
                        disabled
                        value={user?.displayName}
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        className="w-full border-2 border-gray-500 p-2 cursor-not-allowed bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
                      />
                    </label>
                  </div>
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Your Email</span>
                    </label>
                    <label className="">
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        disabled
                        value={user?.email}
                        placeholder="Enter email"
                        className="w-full border-2 border-gray-500 p-2 cursor-not-allowed bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex mx-auto gap-x-5  p-5 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Your Address</span>
                    </label>
                    <label className="">
                      <input
                        autoComplete="off"
                        type="text"
                        name="address"
                        placeholder="Mirpur, Dhaka, Bangladesh"
                        className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      />
                    </label>
                  </div>
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Your Mobile</span>
                    </label>
                    <label className="">
                      <input
                        type="number"
                        autoComplete="off"
                        name="mobile"
                        placeholder="Enter You Mobile Number"
                        className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex mx-auto items-center gap-x-5 px-5 pt-5 pb-4 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Select Your Skill</span>
                    </label>
                    <label className="">
                      <Select
                        form="from-control"
                        classNamePrefix="select"
                        autoComplete="off"
                        className="w-full bg-[#1e2d40] text-black hover:bg-[#17181B] text-sm outline-none focus:border-[#0fcda1]"
                        isMulti
                        options={option}
                        onChange={setSelectedSkills}
                      />
                    </label>
                  </div>
                  <div className=" w-2/4">
                    <label className="label">
                      <span className="">Select Your Gender</span>
                    </label>
                    <select
                      value={selectedOption}
                      placeholder="Select Your Gender"
                      className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      onChange={handleOptionChange}
                    >
                      <option value=" ">Select Your Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex mx-auto gap-x-5 p-5 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Date Of Birth</span>
                    </label>
                    <label className="">
                      <input
                        type="date"
                        name="date"
                        placeholder="date"
                        className="w-full border-2 text-white border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      />
                    </label>
                  </div>
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Personal WebSite</span>
                    </label>
                    <label className="">
                      <input
                        type="text"
                        name="personal"
                        autoComplete="off"
                        placeholder="personal website here"
                        className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      />
                    </label>
                  </div>
                </div>

                <div className="form-control w-full px-5 mx-auto">
                  <label className="label">
                    <span className="">Facebook Account</span>
                  </label>
                  <label className="">
                    <input
                      type="text"
                      name="facebook"
                      autoComplete="off"
                      placeholder="https//:www.facebook.com/profilepress"
                      className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                    />
                  </label>
                </div>
                <div className="form-control w-full px-5 py-5 mx-auto">
                  <label className="label">
                    <span className="">Linkedin Account</span>
                  </label>
                  <label className="">
                    <input
                      type="text"
                      name="linkedin"
                      autoComplete="off"
                      placeholder="https://www.linkedin.com/in/profilepress"
                      className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                    />
                  </label>
                </div>
                <div className="form-control w-full px-5 mx-auto">
                  <label className="label">
                    <span className="">GitHub Account</span>
                  </label>
                  <label className="">
                    <input
                      type="text"
                      name="github"
                      autoComplete="off"
                      placeholder="www.github.com"
                      className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                    />
                  </label>
                </div>

                <div className="mt-3 text-center">
                  <button
                    type="submit"
                    className="flexcode-button px-4 py-3 my-6 block"
                  >
                    update profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEdit;
