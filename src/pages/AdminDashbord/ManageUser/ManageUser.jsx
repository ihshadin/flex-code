import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";

const ManageUser = () => {
  const [loading, setLoading] = useState(true);
  const [makeloading, setMakeLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student/all")
      .then((data) => setUsers(data.data));
    setLoading(false);
  }, []);

  console.log(users);

  const handleMakeAdmin = async (email) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/student/all/${email}`
      );

      //   console.log(res.data.user);

      if (res.data.user.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated to Admin",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flexcode-container text-white -mt-10">
      <div>
        <h1 className="text-center font-bold text-4xl text-[#0fcda1] mb-8">
          ---All User Here---
        </h1>
      </div>
      {loading ? (
        <FlexcodeLoading />
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 border-2 ">Num</th>
              <th className="py-2 border-2 ">Name</th>
              <th className="py-2 border-2 ">Email</th>
              <th className="py-2 border-2 ">Role</th>
              <th className="py-2 border-2 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td className="py-2 border-2 text-center">{index + 1}</td>
                <td className="py-2 border-2 text-center">{user?.username}</td>
                <td className="py-2 border-2 text-center">{user?.email}</td>
                <td className="py-2 border-2 text-center">
                  <span className="badge badge-ghost">{user?.userRole}</span>
                </td>
                <td className="py-2 border-2 text-center">
                  <button
                    onClick={() => handleMakeAdmin(user?.email)}
                    className={`${
                      user.userRole === "admin" &&
                      "btn btn-sm btn-disabled text-white"
                    } flexcode-button px-2 py-1 text-[0.8rem]`}
                    disabled={makeloading || user.userRole === "admin"}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default ManageUser;
