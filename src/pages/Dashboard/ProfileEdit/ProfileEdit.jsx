import React, { useContext, useState } from "react";
import ProfileRow from "./ProfileRow";
import { AuthContext } from "../../../providers/AuthProvider";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import { Link, useNavigation } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdSpaceDashboard } from "react-icons/md";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

const ProfileEdit = () => {
  const { user, loading } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const inputSkills = selectedSkills?.map((item) => item?.value);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   const name = data.name;
  //   const email = data.email;
  //   console.log(name, email);
  // };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  // const [selectedOption, setSelectedOption] = useState("");
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
    const name = form.name.value;
    const dateOfBirth = form.date.value;
    const address = form.address.value;
    const mobile = parseInt(form.mobile.value);
    const gender = selectedOption;
    const personal = form.personal.value;
    const facebook = form.facebook.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const skills = inputSkills;

    const addProfilUpdate = {
      address,
      name,
      mobile,
      skills,
      gender,
      email,
      personal,
      facebook,
      linkedin,
      github,
      dateOfBirth,
    };

    console.log(addProfilUpdate);

    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(addNewToy),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Toy Add Successfull !",
    //         text: "Do you want to continue",
    //         icon: "success",
    //         confirmButtonText: "ok",
    //       });
    //     }
    //     form.reset();
    //   });
  };

  const handleSaveClick = (value) => {
    const upDate = {
      value: value,
      email: user?.email,
    };
    console.log(value);

    // console.log();

    fetch("http://localhost:5000/users", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upDate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("Login Successfull!");
        // navigate(from, { replace: true });
      });
  };

  return (
    <section className="flexcode-banner-bg pt-4">
      <div className="flexcode-container">
        <div className="flex gap-10">
          <div className="h-24">
            <img
              src={user?.photoURL}
              alt="user picture"
              className="mb-3 mx-auto  h-32 w-32 border-2 p-1 rounded-full border-[#0fcda1]"
            />
            <div className="border-2 border-[#0fcda1] gap-x-2 flex flex-col w-[300px]">
              {/* <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <p className="text-gray-400 text-xs">
                <span className="primary-color">FlexCode ID</span>: @
                {user?.displayName.split(" ").join("").toLowerCase()}
              </p> */}
              <Link to="/dashboard/main">
                <button className=" flex items-center justify-center gap-x-3 py-3 font-semibold text-[#0fcda1] text-lg">
                  <MdSpaceDashboard size={22} /> Deshbord
                </button>
              </Link>

              <button className="bg-[#0fcda1] flex items-center pl-8 justify-center gap-x-3 py-3 font-semibold text-black text-lg">
                {" "}
                <FaUserCog size={22} />
                Account Details
              </button>
              <button className=" flex items-center pr-7 justify-center gap-x-3 py-3 font-semibold text-[#0fcda1] text-lg">
                {" "}
                <FaHome size={22} />
                Home
              </button>
              <button className=" flex items-center pr-6 justify-center gap-x-3 py-3 font-semibold text-[#0fcda1] text-lg border-t-2 border-[#0fcda1] ">
                {" "}
                <FaSignInAlt size={22} /> Log out
              </button>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-3 text-gray-400">
              Account Setting
            </h1>
            <form onSubmit={handelUsrUpdate}>
              <div className=" text-gray-200 w-full bg-transparent border-2 border-gray-400 transform-all hover:border-[#0fcda1] p-2  mx-auto">
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
                {/* <div className="flex mx-auto gap-x-5 p-5 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Available Quantity</span>
                    </label>
                    <label className="">
                      <input
                        type="text"
                        name="quantity"
                        placeholder="Enter Your Toy Quantity"
                        className="input text-black input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className=" pb-8">
                  <div className="form-control w-full px-4 border-none my-4  mx-auto">
                    <textarea
                      name="message"
                      id=""
                      rows="5"
                      placeholder="Toy Description"
                      className="text-black p-4 rounded-xl"
                    ></textarea>
                  </div>
                </div> */}
                <div className=" my-3 text-center">
                  <input
                    type="submit"
                    value="update profile"
                    className="flexcode-button px-4 py-2 my-6 block"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="text-lg mt-96 mb-10 flex justify-center">
          <table className="table w-[80%] md:w-[60%] bg-secondary-color">
            {/* head */}
            <thead>
              <tr>
                <th className="font-semibold pl-8 text-lg text-white">
                  Basic Info
                </th>
              </tr>
            </thead>
            <tbody>
              <ProfileRow title="Name" description="Abu Sayeed"></ProfileRow>
              <ProfileRow
                handleSaveClick={handleSaveClick}
                title="Gender"
                description="Male"
              ></ProfileRow>
              <ProfileRow
                title="Location"
                handleSaveClick={handleSaveClick}
                description="Chittagong, Bangladesh"
              ></ProfileRow>
              <ProfileRow
                title="Website"
                description="https://sayeedh.com"
              ></ProfileRow>
              <ProfileRow title="Education" description="HSC"></ProfileRow>
              <ProfileRow
                title="Github"
                description="https://github.com"
              ></ProfileRow>
              <ProfileRow
                title="LinkedIn"
                description="https://linkedin.com"
              ></ProfileRow>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProfileEdit;
