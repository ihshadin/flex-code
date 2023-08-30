import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";

const ManageUser = () => {
  const [loading, setLoading] = useState(true);
  const [makeloading, setMakeLoading] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student/all")
      .then((data) => setUsers(data.data));
    setLoading(false);
  }, [makeloading]);

  useEffect(() => {
    const filterUser = users.find((data) => data.userRole === "genarel");
    setMakeLoading(filterUser);
  }, [makeloading]);

  // console.log("loading", makeloading);

  const handleMakeAdmin = async (email) => {
    // console.log(email);
    try {
      const res = await axios.post(
        `http://localhost:5000/student/all/admin/${email}`
      );

      // console.log(res.data.user);

      if (res.data.user.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated to Admin",
          showConfirmButton: false,
          timer: 1000,
        });
        // const AllUser = users.filter(a =>)
        const filterUser = users.find((data) => data.userRole === "genarel");
        setMakeLoading(filterUser);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeUser = async (email) => {
    // console.log("user", email);
    try {
      const res = await axios.post(
        `http://localhost:5000/student/all/genarel/${email}`
      );

      // console.log(res.data.user);

      if (res.data.user.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Admin role updated to User",
          showConfirmButton: false,
          timer: 1000,
        });
        const filterUser = users.find((data) => data.userRole === "admin");
        setMakeLoading(filterUser);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flexcode-container text-white -mt-10 mr-12">
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
        // <table className="table table-pin-rows table-auto w-full">
        //   <thead>
        //     <tr className="text-white border-0 bg-transparent text-sm tracking-wider">
        //       <th>Num</th>
        //       <th>Name</th>
        //       <th>Email</th>
        //       <th>Role</th>
        //       <th>Actions</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {users?.map((user, index) => (
        //       <tr key={user._id} className="border-0 [&>*]:p-0 group">
        //         <td>
        //           <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-l-3xl">
        //             {index + 1}
        //           </div>
        //         </td>
        //         <td>
        //           <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap">
        //             {user?.username}
        //           </div>
        //         </td>
        //         <td>
        //           <div className="border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap  capitalize">
        //             {user?.email}
        //           </div>
        //         </td>
        //         <td>
        //           <div className="border-b-[2px]  duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap  flex items-center gap-2 capitalize">
        //             <div className="w-3 h-3 bg-primary-color rounded-full flex-shrink-0"></div>
        //             <span>{user?.userRole}</span>
        //           </div>
        //         </td>
        //         <td>
        //           <div className="border-b-[2px]  duration-300 border-[#0fcda1] group-hover:border-white pt-5 px-4 whitespace-nowrap rounded-r-3xl  flex items-center gap-2 capitalize">
        //             {user.userRole === "admin" ? (
        //               <button
        //                 onClick={() => handleMakeUser(user?.email)}
        //                 className="flexcode-button text-[0.8rem] p-1"
        //                 // disabled={makeloading || user.userRole === "admin"}
        //               >
        //                 Make User
        //               </button>
        //             ) : (
        //               <button
        //                 onClick={() => handleMakeAdmin(user?.email)}
        //                 className="flexcode-button text-[0.8rem] p-1"
        //                 // disabled={makeloading || user.userRole === "admin"}
        //               >
        //                 Make admin
        //               </button>
        //             )}

        //             {/*

        //             <button
        //               onClick={() => handleMakeAdmin(user?.email)}
        //               className={`${
        //                 user.userRole === "admin" &&
        //                 "btn btn-sm btn-disabled text-white "
        //               } flexcode-button text-[0.8rem]`}
        //               disabled={makeloading || user.userRole === "admin"}
        //             >
        //               Make Admin
        //             </button>

        //             */}
        //           </div>
        //         </td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>

        <div className="text-white mt-5 rounded-2xl overflow-x-auto">
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center min-w-[600px] px-6 py-3 whitespace-nowrap">
              <div className="font-semibold w-[5%]">No</div>
              <div className="font-semibold w-[30%] ">Name</div>
              <div className="font-semibold w-[35%] ">Email</div>
              <div className="font-semibold w-[15%] text-center">Role</div>
              <div className="font-semibold w-[15%] text-center">Action</div>
            </div>
            {users?.map((data, index) => (
              <div
                key={index}
                className="flex justify-between min-w-[600px] items-center whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl"
              >
                <p className="w-[5%]">{index + 1}</p>
                <p className="w-[30%]">
                  <h2 className="font-medium">{data?.username}</h2>
                </p>
                <p className="w-[35%]">{data?.email}</p>
                <p className="w-[15%] text-center">{data?.userRole}</p>
                <p className="w-[15%] text-center">
                  {data.userRole === "admin" ? (
                    <button
                      onClick={() => handleMakeUser(data?.email)}
                      className=" text-[0.8rem] p-1"
                    >
                      Make User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(data?.email)}
                      className=" p-1"
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

        // <table className="w-full">
        //   <thead>
        //     <tr>
        //       <th className="py-2 border-2 ">Num</th>
        //       <th className="py-2 border-2 ">Name</th>
        //       <th className="py-2 border-2 ">Email</th>
        //       <th className="py-2 border-2 ">Role</th>
        //       <th className="py-2 border-2 ">Actions</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {users?.map((user, index) => (
        //       <tr key={user._id}>
        //         <td className="py-2 border-2 text-center">{index + 1}</td>
        //         <td className="py-2 border-2 text-center">{user?.username}</td>
        //         <td className="py-2 border-2 text-center">{user?.email}</td>
        //         <td className="py-2 border-2 text-center">
        //           <span className="badge badge-ghost">{user?.userRole}</span>
        //         </td>
        //         <td className="py-2 border-2 text-center">
        //           <button
        //             onClick={() => handleMakeAdmin(user?.email)}
        //             className={`${
        //               user.userRole === "admin" &&
        //               "btn btn-sm btn-disabled text-white"
        //             } flexcode-button px-2 py-1 text-[0.8rem]`}
        //             disabled={makeloading || user.userRole === "admin"}
        //           >
        //             Make Admin
        //           </button>
        //         </td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
      )}
    </section>
  );
};

export default ManageUser;
