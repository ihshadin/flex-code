import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import "./AddProblemSolving.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaPlus } from "react-icons/fa";
const AddProblemSolving = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [visibleDivs, setVisibleDivs] = useState([]);

  const handleButtonClick = () => {
    setVisibleDivs([...visibleDivs, true]);
  };
  const [isPremium, setIsPremium] = useState(null);
  const output = selectedOption?.map((item) => item?.value);
  const { register, handleSubmit, reset, getValues } = useForm();
  const onSubmit = (data) => {
   
    const examples = [];
    for (let i = 0; i < visibleDivs.length; i++) {
      const exampleData = {
        example: i + 1,
        input: getValues(`input${i}`),
        output: getValues(`output${i}`),
      };
      examples.push(exampleData);
    }

    const AddProblems = {
      title: data.title,
      functionName: data.title,
      problemsDetails: data.problemsDetails,
      highlightWords: output,
      examples,
      parameterName: [data.parameterName],
      level: data.level,
      isPremium,
      language: data.language,
    
    };
    console.log(AddProblems);
    fetch("http://localhost:5000/problem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddProblems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          console.log(AddProblems);
          Swal.fire({
            title: "Success Your Submit!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      }
      );
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black", // Set text color to black
      fontWeight: "normal", // Set font weight to bold
    }),
  };
  
  return (
    <div className="flexcode-container">
      <section className="py-6 bg-[#1e2d40] text-white rounded-md ">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium text-center tracki uppercase dark:text-violet-400">
              Share your knowledge with other
            </p>
            <h1 className="py-2 text-3xl font-semibold leadi title-font">
              Add problems to solve
            </h1>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto my-5 ">
        {/* Problem Title*/}

        <div className="-mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Problem Title
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 bg-[#1e2d40] py-2 rounded-lg border-2 text-white border-gray-500 outline-none focus:border-[#00ffc3]"
                placeholder="Problem Title"
                {...register("title", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* Function Name*/}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Function Name
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Write Function Name"
                {...register("functionName", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* Problems Details */}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Problems Details
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <textarea
                rows={4}
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2  text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Write details of problems"
                {...register("problemsDetails", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* Highlight Words */}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Highlight Words
            </label>
            <div className="flex">
            
              <CreatableSelect
                className="w-full"
                classNamePrefix="select"
                styles={customStyles} // Apply custom styles
                isMulti
                onChange={setSelectedOption}
                // Other props...
              />

              {/* <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div> */}
              {/* <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Type your highlight words"
                {...register("highlightWords", { required: true })}
              /> */}
            </div>
          </div>
        </div>
        
      <div>

          {/* Example 1 */}
        {
        visibleDivs.map((isVisible, index) => (
          isVisible &&  <div key={index} className="border p-6 my-5">
          <div className="flex -mx-3">
           <div className="w-full px-3 mb-5">
             <label htmlFor="" className="text-sm font-semibold px-1">
               Example - {`${index + 1}`}
             </label>
             <div className="flex">
               <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                 <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
               </div>
               <input
                 type="text"
                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                 text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                 placeholder={`Type example ${index + 1} `}
                 {...register(`example${index}`, { required: true })}
               />
             </div>
           </div>
         </div>
 
         <div className="flex -mx-3">
           <div className="w-full px-3 mb-5">
             <label htmlFor="" className="text-sm font-semibold px-1">
               Input
             </label>
             <div className="flex">
               <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                 <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
               </div>
               <input
                 type="text"
                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                 text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                 placeholder={`Input for example ${index + 1} `}
                 {...register(`input${index}`, { required: true })}
               />
             </div>
           </div>
         </div>
 
         <div className="flex -mx-3">
           <div className="w-full px-3 mb-5">
             <label htmlFor="" className="text-sm font-semibold px-1">
               Output
             </label>
             <div className="flex">
               <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                 <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
               </div>
               <input
                 type="text"
                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                 text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                 placeholder={`Output for example ${index + 1} `}
                 {...register(`output${index}`, { required: true })}
               />
             </div>
           </div>
         </div>
 
          </div> ))}
          <div onClick={handleButtonClick} className="flex items-center gap-3 border-b w-1/4 px-3 mb-10 cursor-pointer">
            <FaPlus className="text-3xl font-thin"/>  Add Example
        </div>
        {/* Example 2 */}

      </div>

        {/* Parameter Name */}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Parameter Name
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Type your parameter Name"
                {...register("parameterName", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* Level */}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Level
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Type your level"
                {...register("level", { required: true })}
              />
            </div>
          </div>
        </div>


        {/* language */}

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-sm font-semibold px-1">
              Language
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 
                text-white border-gray-500 bg-[#1e2d40] outline-none focus:border-[#00ffc3]"
                placeholder="Type your Language"
                {...register("language", { required: true })}
              />
            </div>
          </div>
        </div>


        {/* is Premium */}

        <div className="flex -mx-3">
          <div className="px-3 mb-5 w-full flex items-center gap-5">
            <div>
            <label htmlFor="" className="text-sm font-semibold px-1">
            Premium
            </label>
            </div>
           

            <div>
            <div className="flex">
             
             <div className="">
               <label className="label cursor-pointer">
                 <span className="label-text text-white pr-4">True</span>
                 <input
                   type="radio"
                   name="radio-10"
                   className="radio bg-white checked:bg-[#00ffc3]"
                   onClick={() => setIsPremium(true)}
                 />
               </label>
             </div>
             <div className="px-5">
               <label className="label cursor-pointer">
                 <span className="label-text text-white pr-4">False</span>
                 <input
                   type="radio"
                   name="radio-10"
                   className="radio  bg-white checked:bg-[#00ffc3]"
                   onClick={() => setIsPremium(false)}

                   // {...register("isPremium", { required: true })}
                 />
               </label>
             </div>
           </div>
            </div>
            
          </div>
        </div>



        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              type="submit"
              className="block w-full max-w-xs mx-auto bg-[#1da888] hover:bg-[#2bd1aa] hover:btn-outline focus:bg-[#2c3533] text-white rounded-lg px-3 py-3 font-semibold"
            >
              DONE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProblemSolving;
