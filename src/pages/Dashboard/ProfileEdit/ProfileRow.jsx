import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const ProfileRow = ({ title, description, handleSaveClick }) => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [desEditing, setDesEditing] = useState(true);
  const [editedData, setEditedData] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    setDesEditing(false);
  };

  const handleCancleClick = () => {
    setIsEditing(false);
    setDesEditing(true);
  };

  // const handleSaveClick = () => {
  //   setIsEditing(false);
  //   setDesEditing(true);
  //   const upDate = {
  //     gender: editedData,
  //     email: user?.email,
  //   };
  //   console.log(editedData);

  //   console.log();

  //   fetch("http://localhost:5000/users", {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(upDate),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // toast.success("Login Successfull!");
  //       // navigate(from, { replace: true });
  //     });
  // };

  return (
    <div>
      <tr className="flex justify-between items-center px-5 border-0 text-white">
        <td>{title}</td>
        {desEditing ? (
          <>
            <td className="">{description}</td>
          </>
        ) : (
          <></>
        )}
        <td>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedData}
                onChange={(e) => setEditedData(e.target.value)}
                className="border rounded p-2 text-black"
              />
              <button
                type="submt"
                className="bg-[#0fcda1] bg-opacity-100 text-white font-bold py-2 px-4 rounded mx-2 mt-1"
                onClick={() => handleSaveClick(editedData)}
              >
                Save
              </button>

              <button
                className="bg-[#0fcda1] bg-opacity-70 text-white font-bold py-2 px-4 rounded mx-2"
                onClick={handleCancleClick}
              >
                Cancle
              </button>
            </div>
          ) : (
            <div>
              <button
                className="bg-[#0fcda1] bg-opacity-50 text-white hover:bg-transparent hover:transition-all hover:duration-500 font-semibold py-2 px-4 rounded"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          )}
        </td>
      </tr>
    </div>
  );
};

export default ProfileRow;
