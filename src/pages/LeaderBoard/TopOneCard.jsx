import React from "react";

const TopOneCard = () => {
  return (
    <div>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div className="">
          <div className=" h-28 flex items-center justify-center  bg-[#0fcda15d]">
            <h2 className="font-bold text-xl text-center mb-5">
              Position : Top
            </h2>
          </div>

          <div className="text-center -mt-10">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              className="h-20 w-20 rounded-full object-cover mx-auto border-2 p-1 border-[#0fcda15d]"
            />

            <div>
              <h3 className="text-lg font-medium text-white">Claire Mac</h3>
              <p className="text-sm">@claireMac</p>

            </div>
          </div>
        </div>
       

        <div class="mt-6 flex items-center justify-between gap-8 text-xs">
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-7 w-7 text-[#177f6e]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Number of solve</p>

              <p class="font-medium">550</p>
            </div>
          </div>

          {/* <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div class="mt-1.5 sm:mt-0">
          <p class="text-gray-500">Bathroom</p>

          <p class="font-medium">2 rooms</p>
        </div>
      </div> */}
          <button>
            <div class=" sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-7 w-7 text-[#177f6e]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Go to profile</p>

                <p class="font-medium">View profile</p>
              </div>
            </div>
          </button>
        </div>
      </article>
    </div>
  );
};

export default TopOneCard;
