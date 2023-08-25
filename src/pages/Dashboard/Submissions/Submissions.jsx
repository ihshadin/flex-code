import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUser } from "react-icons/fa";

const Submissions = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className='bg-[#0E141E] min-h-screen'>
      <div className='border-b-2 border-gray-500 py-5'>
        <p className='text-slate-300 md:ml-36 mb-2'>All Submissions</p>
        <h1 className='text-white md:ml-36 font-semibold'>Submissions</h1>
      </div>
      <div className=" flex justify-center mt-10 bg-[#0E141E] text-white">
        <table className="table table-striped table-bordered table-hover w-[60%] md:w-[80%] bg-secondary-color">
          <thead>
            <tr className='text-white border-gray-500 '>
              <th>Label</th>
              <th>Time Submitted</th>
              <th>Question</th>
              <th>Status</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-0'>
              <td>Medium</td>
              <td>4 months, 2 weeks ago</td>
              <td>Two Sum</td>
              <td>
                <Link className="text-success">
                  <strong>Accepted</strong>
                </Link>
              </td>
              <td>javascript</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submissions;