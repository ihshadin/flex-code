import React, { useEffect, useState } from "react";
import Top3Card from "./Top3Card";
import { Link } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";

const LeaderBoard = () => {
  const [solvedProblems, setSolvedProblems] = useState([]);

  const [axiosNormal] = useAxiosNormal();


  console.log(solvedProblems.slice(3).length > 0);

  useEffect(() => {
    axiosNormal.get('/solvedProblems/leaderboard')
      .then(data => {
        setSolvedProblems(data);
      })
  }, [])

  return (
    <section>
      <div className="flexcode-container">
        <div className='border-b-2 border-[#0fcda185] pb-3 flex justify-between items-center'>
          <div>
            <h1 className='text-white text-2xl md:text-4xl tracking-wider font-semibold'>Top Problem Solvers</h1>
            <p className='text-slate-300 text-sm md:text-base mt-1'>Meet the Brilliant Minds Behind the Solutions</p>
          </div>
          <Link to='/dashboard'>
            <button className="inline-flex items-center gap-3 px-3 py-3 group rounded-xl bg-gradient-to-tr from-[#1e2d4056] to-[#0fcda122] border border-gray-500 hover:border-[#0fcda1] focus:border focus:border-[#0fcda1] text-white">
              <svg className="w-16" fill="#0fcda1" viewBox="0 0 605 429.7" >
                <path d="M302.8,0.2c90.6,0,181.1,0.2,271.7-0.2c17.4-0.1,30.7,12.9,30.6,30.5c-0.3,123-0.2,246-0.2,369c0,18.6-11.4,30-29.8,30
	c-181.6,0-363.1-0.1-544.7,0.2c-17,0-30.4-12.6-30.4-30.2c0.3-123,0.3-246,0-369C0,12.4,13.7-0.1,30.2,0
	C121,0.4,211.9,0.2,302.8,0.2z M302.5,416.8c90.6,0,181.1,0,271.7,0c12.3,0,18-5.6,18-18c0-122.7,0-245.4,0-368.1
	c0-12.1-5.8-17.8-17.7-17.8c-181.3,0-362.5,0-543.8,0c-12,0-17.7,5.7-17.7,17.8c0,122.7,0,245.4,0,368.1c0,12.4,5.6,18,17.9,18
	C121.4,416.8,212,416.8,302.5,416.8z"/>
                <path d="M453.8,344.7c12.7,0,24.5,0,36.9,0c0,10.9,0,21.5,0,32.4c7.4,0,14.2,0,21.7,0c0-19.8,0-39.5,0-59.3c0-19.7,0-39.5,0-59.6
	c12.3,0,24.3,0,36.7,0c0,39.6,0,79.1,0,119.1c7.4,0,14.2,0,21.4,0c0,4.5,0,8.5,0,12.8c-85.1,0-170.1,0-255.4,0c0-4.2,0-8.1,0-12.7
	c7.1,0,14.1,0,21.6,0c0-17.5,0-34.5,0-51.7c12.4,0,24.2,0,36.6,0c0,17.1,0,34.1,0,51.4c7.4,0,14.2,0,21.7,0c0-32.4,0-64.9,0-97.6
	c12.5,0,24.4,0,36.8,0c0,32.4,0,64.8,0,97.5c7.5,0,14.5,0,21.9,0C453.8,366.2,453.8,355.6,453.8,344.7z"/>
                <path d="M252.4,70.1c-8.3,6.8-16,13.3-23.9,19.5c-1,0.8-3.6,0.3-5.1-0.4C202,78.6,179.7,76,156.5,81.6C117.3,91.1,87.9,125,84,165.2
	c-0.3,3-0.5,6-0.6,9c-0.3,9.8-6.8,16.4-16.2,16.2c-8.9-0.2-15.5-7.2-15.3-16.7c0.8-33.5,12.3-62.7,35.4-87.1
	c42-44.2,110.4-52.2,161.5-19C249.9,68.3,250.8,69,252.4,70.1z"/>
                <path d="M295.9,52.6C268.6,89.8,241.3,127,214,164.2c-6.2,8.4-12.2,16.9-18.5,25.2c-5.8,7.7-13.7,10.8-23.1,8.4
	c-9.1-2.3-14.4-8.5-15.9-17.7c-1.4-8.7,2-15.5,8.7-21c18.3-15,36.6-30.1,54.9-45.1c24.3-20.1,48.7-40.1,73-60.2
	c0.8-0.6,1.6-1.2,2.4-1.8C295.6,52.2,295.7,52.4,295.9,52.6z"/>
                <path d="M174.4,368c25.7,0,51.3,0,77,0c7.5,0,11.6,6.1,8.1,12c-1.9,3.3-4.9,4.1-8.5,4c-22-0.1-44.1,0-66.1,0c-28.8,0-57.7,0-86.5,0
	c-1.4,0-2.7,0.1-4.1-0.1c-4.4-0.5-7.4-4-7.2-8.4c0.1-4,3.3-7.3,7.5-7.5c3.2-0.2,6.3-0.1,9.5-0.1C127.6,368,151,368,174.4,368z"/>
                <path d="M173.4,288.3c-24.9,0-49.8,0-74.7,0c-1.7,0-3.3,0.1-5-0.1c-3.7-0.5-6.5-3.7-6.7-7.4c-0.2-3.7,2.3-7.2,6-8
	c1.6-0.3,3.3-0.4,4.9-0.4c50.4,0,100.8,0,151.2,0c1.5,0,3,0,4.5,0.2c4.3,0.6,7.1,4.1,7,8.1c-0.2,4.1-3.3,7.3-7.6,7.5
	c-4.7,0.2-9.4,0.1-14,0.1C217.2,288.3,195.3,288.3,173.4,288.3z"/>
                <path d="M173.4,336.3c-24.9,0-49.8,0-74.7,0c-1.7,0-3.3,0.1-5-0.1c-3.7-0.5-6.5-3.7-6.7-7.4c-0.2-3.7,2.3-7.2,6-8
	c1.6-0.3,3.3-0.4,4.9-0.4c50.4,0,100.8,0,151.2,0c1.5,0,3,0,4.5,0.2c4.3,0.6,7.1,4.1,7,8.1c-0.2,4.1-3.3,7.3-7.6,7.5
	c-4.7,0.2-9.4,0.1-14,0.1C217.2,336.3,195.3,336.3,173.4,336.3z"/>
                <path d="M280.2,96.2c14.3,18.6,22.8,38.9,25.8,61.5c0.7,5.4,1,10.8,1.1,16.2c0.1,9.5-6.1,16.2-14.9,16.5c-9.3,0.3-16.4-6.2-16.5-16
	c-0.1-17.8-4.9-34.2-13.8-49.5c-0.6-1-0.5-3,0.1-3.9C267.9,112.9,273.9,104.8,280.2,96.2z"/>
                <path d="M479.5,185.9c-26.8,0-53.7,0-80.5,0c-1.5,0-3.3,0.5-4.5-0.2c-1.9-1.2-4.7-3-4.8-4.7c-0.1-1.8,2.2-4.1,4-5.5
	c1.1-0.8,3.2-0.3,4.9-0.3c54.4,0,108.9,0,163.3,0c0.9,0,1.8,0,2.7,0c3.7,0.2,6.2,1.7,6.1,5.7c-0.1,3.7-2.7,5.1-6.2,5
	c-11.2,0-22.3,0-33.5,0C513.9,185.9,496.7,185.9,479.5,185.9z"/>
                <path d="M480.1,68.2c-27.1,0-54.3,0-81.4,0c-1.5,0-3.3,0.5-4.4-0.2c-1.8-1.1-4.3-2.9-4.4-4.6c-0.2-1.7,1.9-4,3.5-5.4
	c0.9-0.8,2.9-0.5,4.4-0.5c55.2,0,110.4,0,165.5,0c1.3,0,3.2-0.3,3.9,0.4c1.5,1.5,3.4,3.7,3.4,5.5c0,1.5-2.4,3.3-4.1,4.5
	c-1,0.6-2.6,0.2-4,0.2C535,68.2,507.5,68.2,480.1,68.2z"/>
                <path d="M480.5,146.8c-27.6,0-55.2,0-82.8,0c-1.4,0-3.2,0.4-4-0.2c-1.7-1.5-3.9-3.6-3.9-5.6c0-1.6,2.6-3.4,4.3-4.7
	c0.8-0.6,2.3-0.2,3.5-0.2c55,0,110.1,0,165.1,0c1.1,0,2.5-0.4,3.1,0.1c1.8,1.5,4.2,3.1,4.7,5.1c0.8,3-1.5,5-4.6,5.5
	c-1.3,0.2-2.7,0.1-4.1,0.1C534.8,146.8,507.6,146.8,480.5,146.8z"/>
                <path d="M480.2,97c27.3,0,54.6,0,81.9,0c1.5,0,3.4-0.5,4.4,0.3c1.7,1.1,3.8,2.9,4,4.6c0.1,1.7-1.6,3.9-3.1,5.2
	c-1.1,0.9-3.2,0.7-4.8,0.7c-55,0-110.1,0-165.1,0c-1.6,0-3.7,0.1-4.8-0.7c-1.5-1.3-3.2-3.6-3-5.3c0.2-1.7,2.4-3.4,4.1-4.5
	c1.1-0.7,2.9-0.2,4.4-0.2C425.6,97,452.9,97,480.2,97z"/>
                <path d="M74.3,280.5c-0.1,8.4-6.8,14.9-15,14.8c-8.2-0.1-14.8-7-14.6-15.3c0.2-8.3,7-14.7,15.3-14.5
	C68.1,265.8,74.4,272.4,74.3,280.5z"/>
                <path d="M74.3,328.2c0,8.3-6.8,15.1-14.9,15c-8.2-0.2-15-7.2-14.8-15.2c0.2-8.3,6.9-14.7,15.3-14.6C68.1,313.6,74.4,320,74.3,328.2z" />
                <path d="M59.4,361.3c8.4-0.1,14.9,6.4,15,14.8c0,8.2-6.3,14.7-14.4,14.9c-8.2,0.2-15.2-6.4-15.3-14.6C44.5,368.1,51,361.4,59.4,361.3z" />
              </svg>

              <span className="flex flex-col gap-1 items-start">
                <span className="text-xs text-slate-300">Explore your dashboard</span>
                <span className="font-semibold title-font">Back to Dashboard</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 items-center justify-center gap-8 my-12">
          {
            solvedProblems[1] && <Top3Card data={solvedProblems[1]} position={2} />
          }
          {
            solvedProblems[0] && <Top3Card data={solvedProblems[0]} position={1} />
          }
          {
            solvedProblems[2] && <Top3Card data={solvedProblems[2]} position={3} />
          }
        </div>
        {
          solvedProblems.slice(3).length > 0 && (
            <>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg text-white font-medium">
                  Rest Solver
                </h2>
              </div>
              <div className="text-white mt-5 rounded-2xl overflow-x-auto">
                <div className='overflow-x-auto'>
                  <div className='flex justify-between items-center min-w-[600px] px-6 py-3 whitespace-nowrap'>
                    <div className='font-semibold w-[5%]'>SL</div>
                    <div className='font-semibold w-[40%]'>User Info</div>
                    <div className='font-semibold w-[20%] text-center'>Points</div>
                    <div className='font-semibold w-[20%] text-center'>Solved</div>
                    <div className='font-semibold w-[15%] text-center'>Profile</div>
                  </div>
                  {
                    solvedProblems.slice(3).map((solveProblem, index) => (
                      <div key={index} className='flex justify-between min-w-[600px] items-center whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl'>
                        <p className='w-[5%]'>{index + 4}</p>
                        <p className='w-[40%] flex gap-2'>
                          <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                          <div>
                            <h2 className="font-medium">
                              {solveProblem.userName}
                            </h2>
                            <p className="text-sm text-slate-400">
                              @{solveProblem.userName.toLowerCase().split(' ').join('')}
                            </p>
                          </div>
                        </p>
                        <p className='w-[20%] text-center'>{solveProblem.points}</p>
                        <p className='w-[20%] text-center'>{solveProblem.problemsSolved}</p>
                        <p className='w-[15%] text-center'>Profile</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </>
          )
        }
        <div>
          {/* <div className="flex items-center gap-x-3">
            <h2 className="text-lg text-white font-medium">
              Rest Solver
            </h2>
          </div>
          <div className="text-white mt-5 rounded-2xl overflow-x-auto">
            <div className='overflow-x-auto'>
              <div className='flex justify-between items-center min-w-[600px] px-6 py-3 whitespace-nowrap'>
                <div className='font-semibold w-[5%]'>SL</div>
                <div className='font-semibold w-[40%]'>User Info</div>
                <div className='font-semibold w-[20%] text-center'>Points</div>
                <div className='font-semibold w-[20%] text-center'>Solved</div>
                <div className='font-semibold w-[15%] text-center'>Profile</div>
              </div>
              {
                solvedProblems.slice(3).map((solveProblem, index) => (
                  <div key={index} className='flex justify-between min-w-[600px] items-center text-center whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl'>
                    <p className='w-[5%] text-left'>{index + 4}</p>
                    <p className='w-[40%] flex gap-2'>
                      <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                      <div>
                        <h2 className="font-medium dark:text-white ">
                          {solveProblem.userName}
                        </h2>
                        <p className="text-sm font-normal text-slate-400 dark:text-gray-400">
                          @{solveProblem.userName.toLowerCase().split(' ').join('')}
                        </p>
                      </div>
                    </p>
                    <p className='w-[20%]'>{solveProblem.points}</p>
                    <p className='w-[20%]'>{solveProblem.problemsSolved}</p>
                    <p className='w-[15%]'>Profile</p>
                  </div>
                ))
              }
              <div className='flex justify-between min-w-[600px] items-center text-center whitespace-nowrap border-b-[2px] duration-300 border-[#0fcda1] hover:border-white px-6 pb-2 pt-7 rounded-3xl'>
                <p className='w-[5%] text-left'>04</p>
                <p className='w-[40%] flex gap-2'>
                  <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                  <div>
                    <h2 className="font-medium dark:text-white ">
                      Arthur Melo
                    </h2>
                    <p className="text-sm font-normal text-slate-400 dark:text-gray-400">
                      @authurmelo
                    </p>
                  </div>
                </p>
                <p className='w-[20%]'>1253</p>
                <p className='w-[20%]'>125</p>
                <p className='w-[15%]'>Profile</p>
              </div>
            </div>
          </div> */}

          {/* <table className="table table-pin-rows table-auto">
            <thead>
              <tr className='text-white border-0 bg-seondary text-sm tracking-wider'>
                <th>Position</th>
                <th>Solver Info</th>
                <th>Points</th>
                <th>Number of solve</th>
                <th>View Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-0 [&>*]:p-0 group'>
                <td>
                  <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-l-3xl'>
                    4
                  </div>
                </td>
                <td>
                  <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap flex items-center gap-1'>
                    <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <div>
                      <h2 className="font-medium text-gray-800 dark:text-white ">
                        Arthur Melo
                      </h2>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        @authurmelo
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color capitalize'>
                    1520
                  </div>
                </td>
                <td>
                  <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap primary-color'>
                    25
                  </div>
                </td>
                <td>
                  <div className='border-b-[2px] duration-300 border-[#0fcda1] group-hover:border-white pb-3 pt-5 px-4 whitespace-nowrap rounded-r-3xl'>
                    <button className="flexcode-button">Profile</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}

          {/* <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />
                            <span>Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Position</span>

                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.1"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.1"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.3"
                              />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Number of solve</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          View Profile
                        </th>


                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Arthur Melo
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @authurmelo
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              4
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          490
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          authurmelo@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Amelia. Anderson
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @ameliaanderson
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              5
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          450
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          ameliaanderson@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  junior REIS
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @junior
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              6
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          420
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          junior@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>
                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Olivia Wathan
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @oliviawathan
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              7
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          400
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          oliviawathan@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Mia
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @mia
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              8
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          380
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          mia@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="flex items-center justify-between mt-6">
            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>previous</span>
            </a>

            <div className="items-center hidden lg:flex gap-x-3">
              <a
                href="#"
                className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
              >
                1
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                2
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                3
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                ...
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                12
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                13
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                14
              </a>
            </div>

            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
