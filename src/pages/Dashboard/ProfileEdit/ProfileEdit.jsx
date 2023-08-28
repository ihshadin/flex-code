import React, { useContext, useState } from "react";
import ProfileRow from "./ProfileRow";
import { AuthContext } from "../../../providers/AuthProvider";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import { useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaDashcube,
  FaHome,
  FaSignInAlt,
  FaSpinner,
  FaUser,
  FaUserCog,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { MdDashboard, MdSpaceDashboard } from "react-icons/md";

const ProfileEdit = () => {
  const { user, loading } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [desEditing, setDesEditing] = useState(true);
  const [editedData, setEditedData] = useState("");
  // console.log(user?.photoURL);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    console.log(name, email);
  };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handelAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const toyName = form.toyName.value;
    const picture = form.picture.value;
    const email = form.email.value;
    const category = selectedOption;
    const price = parseInt(form.price.value);
    const message = form.message.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const addNewToy = {
      category,
      name,
      toyName,
      picture,
      email,
      price,
      message,
      rating,
      quantity,
    };

    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Toy Add Successfull !",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
        form.reset();
      });
  };

  const handleSaveClick = (value) => {
    const upDate = {
      value: value,
      email: user?.email,
    };
    console.log(value);

    // console.log();

    fetch("http://localhost:5000/student", {
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
    <section className="flexcode-banner-bg pt-12">
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
              <button className=" flex items-center justify-center gap-x-3 py-3 font-semibold text-[#0fcda1] text-lg">
                <MdSpaceDashboard size={22} /> Deshbord
              </button>
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
            <form onSubmit={handelAddCoffee}>
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
                        name="mobil"
                        placeholder="Enter You Mobile Number"
                        className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex mx-auto items-center gap-x-5 p-5 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Your Toy Price</span>
                    </label>
                    <label className="">
                      <input
                        type="number"
                        name="price"
                        placeholder="Enter Your Toy Price"
                        className="input text-black input-bordered w-full"
                      />
                    </label>
                  </div>
                  {/* <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Your Toy Price</span>
                    </label>
                    <label className="">
                      <input
                        type="number"
                        name="price"
                        placeholder="Enter Your Toy Price"
                        className="input text-black input-bordered w-full"
                      />
                    </label>
                  </div> */}

                  <div className=" w-2/4">
                    <label className="label">
                      <span className="">Select Your Toy Cetegor</span>
                    </label>
                    <select
                      value={selectedOption}
                      placeholder="Select Your Toy Cetegor"
                      className="w-full border-2 border-gray-500 p-2 bg-[#1e2d40] hover:bg-[#17181B] text-sm outline-none py-2 focus:border-[#0fcda1]"
                      onChange={handleOptionChange}
                    >
                      <option value="">Select Your Toy Cetegor</option>
                      <option value="Sports-car">Sports-car</option>
                      <option value="Truck">Truck</option>
                      <option value="Regular-car">Regular-car</option>
                    </select>
                  </div>
                </div>
                <div className="flex mx-auto gap-x-5 p-5 ">
                  <div className="form-control w-2/4 mx-auto">
                    <label className="label">
                      <span className="">Toy Rating</span>
                    </label>
                    <label className="">
                      <input
                        type="text"
                        name="rating"
                        placeholder="Enter Your Toy Rating"
                        className="input text-black input-bordered w-full"
                      />
                    </label>
                  </div>
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
                </div>
                <div className=" my-3 text-center">
                  <input
                    type="submit"
                    value="Add New Toy"
                    className="custom-btn"
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
