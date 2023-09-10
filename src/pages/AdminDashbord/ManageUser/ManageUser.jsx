import { useState } from "react";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAllUsers from "../../../Hooks/useAllUsers";

const ManageUser = () => {
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  const [allUsers] = useAllUsers();

  const handleMakeAdmin = async (email) => {
    try {
      const res = await axiosSecure.post(`/users/all/admin/${email}`);
      if (res.data.user.modifiedCount > 0) {
        toast.success("User role updated to admin!", {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeUser = async (email) => {
    try {
      const res = await axiosSecure.post(`/users/all/genarel/${email}`);

      if (res.data.user.modifiedCount > 0) {
        toast.success("Admin role updated to user!", {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(allUsers);

  return (
    <section className="text-white md:mx-7 md:my-5">
      <div className="border-b-2 border-[#0fcda185] pb-3 mb-8 ">
        <h1 className="text-white text-2xl md:text-4xl tracking-wider font-semibold">
          All user
        </h1>
        <p className="text-slate-300 text-sm md:text-base mt-1">
          our valuable users{" "}
        </p>
      </div>
      {loading ? (
        <FlexcodeLoading />
      ) : (
        <div className="text-white mt-5 rounded-2xl">
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center min-w-[800px] px-6 py-3 whitespace-nowrap">
              <div className="font-semibold w-[5%]">SL</div>
              <div className="font-semibold w-[30%] ">Name</div>
              <div className="font-semibold w-[35%] ">Email</div>
              <div className="font-semibold w-[15%] text-center">Role</div>
              <div className="font-semibold w-[15%] text-center">Action</div>
            </div>
            {allUsers?.map((data, index) => (
              <div
                key={index}
                className="flex justify-between min-w-[800px] items-center whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl"
              >
                <p className="w-[5%]">{index + 1}</p>
                <div className="w-[30%]">
                  <h2 className="font-medium overflow-hidden text-ellipsis max-w-[19ch]">
                    {data?.name}
                  </h2>
                </div>
                <p className="w-[35%]">{data?.email}</p>
                <p className="w-[15%] text-center capitalize">
                  {data?.userRole}
                </p>
                <p className="w-[15%] text-center">
                  {data.userRole === "admin" ? (
                    <button
                      onClick={() => handleMakeUser(data?.email)}
                      className="text-sm px-2 bg-[#1e2d40] rounded-lg capitalize"
                    >
                      Make User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(data?.email)}
                      className="text-sm px-2 bg-[#0fcda188] rounded-lg capitalize"
                      // disabled={makeloading || user.userRole === "admin"}
                    >
                      Make admin
                    </button>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageUser;
