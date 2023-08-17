import React from "react";
import image1 from "../../../public/image-1.jpg";

const Blog = () => { 
  return (
    <section>
      <div className="flexcode-container">
        <div className="max-w-[600px] mx-auto mb-6 md:mb-12">
          <h2 className="text-center font-bold text-2xl md:text-4xl text-white">
            Proactive Problem Solving
          </h2>
          <p className="text-white text-center mt-2 md:mt-4">
            Explore our insightful blog, where we dissect challenges, share
            actionable strategies, and empower you to conquer obstacles with
            confidence.
          </p>
        </div>
  
        {/* New Blog Articles */}

        <section className=" dark:bg-gray-900">
          <div className="container  mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">

               {/* 1s blog card */}
              <div className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    What do you want to know about UI
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fugit dolorum amet dolores praesentium, alias
                    nam? Tempore
                  </p>

                  <a
                    href="#"
                    className="absolute bottom-0 inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* 2nd blog card */}

              <div className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    All the features you want to know
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fugit dolorum amet dolores praesentium, alias
                    nam? Tempore
                  </p>

                  <a
                    href="#"
                    className=" absolute bottom-0  inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* 3nd blog card */}
              <div className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    Which services you get from Meraki UI
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fugit dolorum amet dolores praesentium, alias
                    nam? Tempore
                  </p>

                  <a
                    href="#"
                    className="absolute bottom-0 inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>

               {/* 4th blog card */}
               <div className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    What do you want to know about UI
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fugit dolorum amet dolores praesentium, alias
                    nam? Tempore
                  </p>

                  <a
                    href="#"
                    className="absolute bottom-0 inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* 5th blog card */}

              <div className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    All the features you want to know
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fugit dolorum amet dolores praesentium, alias
                    nam? Tempore
                  </p>

                  <a
                    href="#"
                    className="absolute bottom-0 inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>

              {/* 6th blog card */}
              <div className="bg-[#1e2d40] shadow-md shadow-[#111111] rounded-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white shadow-lg shadow-slate-900 dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-6 h-[200px] relative">
                  <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                    Which services you get from Meraki UI
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-white dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fugit dolorum amet dolores praesentium, alias
                    nam? Tempore
                  </p>

                  <a
                    href="#"
                    className="absolute bottom-0 inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blog;
