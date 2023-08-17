import React from 'react';
import { useState } from 'react';

const ProfileRow = ({title, description}) => {
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


    const handleSaveClick = () => {
        console.log(editedData);
        setIsEditing(false);
        setDesEditing(true);
    };

    return (
        <div>
            <tr className='flex justify-between items-center px-5 border-0 text-white'>
                <td>
                    {title}
                </td>
                {desEditing ? <><td className=''>{description}</td></>: <></>}
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
                                className="bg-[#0fcda1] bg-opacity-100 text-white font-bold py-2 px-4 rounded mx-2 mt-1"
                                onClick={handleSaveClick}
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
                                className="bg-[#0fcda1] bg-opacity-50 text-white hover:bg-transparent hover:transition-all hover:duration-500 font-semibold py-2 px-4 rounded" onClick={handleEditClick}
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