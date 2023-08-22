import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import Split from "react-split";
import "./ProblemDetails.css";
import { useParams } from "react-router-dom";
// import singleProblem from '../../../public/problem2.json'

const ProblemDetails = () => {
  const { id } = useParams();
  const [code, setCode] = useState(""); //console.log("Hello, world!");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [outputMessage, setOutputMessage] = useState(""); //new
  const [problems, setProblems] = useState([]);
  const [consoleClicked, setConsoleClicked] = useState("");

  const singleProblem = problems.find((problem) => problem.id == id) || [];
  // console.log(singleProblem);
  useEffect(() => {
    fetch("/problems.json")
      .then((res) => res.json())
      .then((data) => {
        setProblems(data);
      });
  }, []);

  //  new
  const defaultCode = `
function ${singleProblem.functionName}(${singleProblem.parameterName}){
// Your solution logic

 return   ;
}
`;

  // new
  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    setOutputMessage("");
  };

  const runCode = () => {
    try {
      // Clear console output
      setConsoleOutput([]);

      // Capture console output
      const originalLog = console.log;
      console.log = (...args) => {
        originalLog.apply(console, args);
        setConsoleOutput((prevOutput) => [...prevOutput, args.join(" ")]);
      };

      // Execute code
      const userCode = `${code || defaultCode}\n\n${
        singleProblem.functionName
      }(${singleProblem.examples[0].input});`;

      const userOutput = eval(userCode);
      // console.log(userOutput);
      // setCodeOutput(userOutput)

      // Output Message
      if (userOutput == singleProblem.examples[0].output) {
        setOutputMessage("Congratulations! Problem solved.");
      } else {
        setOutputMessage("Your output does not match the expected output.");
      }

      // Restore console.log
      console.log = originalLog;
    } catch (error) {
      console.error("Error:", error);
      setOutputMessage(
        `An error occurred while running your code.\n\n${error}`
      );
    }
  };

  return (
    <section id="problemDetails">
      <div className="flexcode-container flex gap-10">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2 primary-color">
            {singleProblem.title}
          </h2>
          <p className="leading-loose">
            {/* Given an array of integers <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">nums</span> and an integer <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">target</span>, return indices of the two numbers such that they add up to <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">target</span>.
                        <br /><br />
                        You may assume that each input would have exactly one <b>solution</b>, and you may not use the same element twice.
                        <br /><br />
                        You can return the answer in any order. */}
            {singleProblem?.problemsDetails
              ?.split(/(\s+|,|\.)/)
              .map((word, index, arr) => (
                <React.Fragment key={index}>
                  {singleProblem?.highlightWords.includes(
                    word.toLowerCase()
                  ) ? (
                    <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">
                      {word}
                      {arr[index + 1] === "," || arr[index + 1] === "."
                        ? arr[index + 1]
                        : ""}
                    </span>
                  ) : (
                    word
                  )}
                </React.Fragment>
              ))}
          </p>
          <div className="flex flex-col gap-6 mt-10">
            {singleProblem?.examples?.map((ex, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">Example {ex.example}</h3>
                <div className="bg-secondary-color p-5 rounded-xl mt-2 flex flex-col gap-1 text-gray-400">
                  <span>
                    <b className="text-white font-semibold">Input:</b>{" "}
                    {ex.input}{" "}
                  </span>
                  <span>
                    <b className="text-white font-semibold">Output:</b>{" "}
                    {ex.output}
                  </span>
                </div>
              </div>
            ))}
            {/* <div>
                            <h3 className="text-xl font-semibold">Example 2</h3>
                            <div className="bg-secondary-color p-5 rounded-xl mt-2 flex flex-col gap-1 text-gray-400">
                                <span><b className="text-white font-semibold">Input:</b> nums = [2,7,11,15], target = 9</span>
                                <span><b className="text-white font-semibold">Output:</b> [0,1]</span>
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <Split
            className="flex flex-col"
            direction="vertical"
            sizes={[85, 15]}
            minSize={0}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={0}
            dragInterval={1}
            cursor="col-resize"
          >
            <div className="bg-secondary-color p-2 rounded-xl">
              <CodeMirror
                value={code || defaultCode}
                onBeforeChange={handleCodeChange}
                className="bg-transparent py-3 text-[16px]"
                options={{
                  mode: "javascript",
                  theme: "dracula",
                  lineNumbers: true,
                }}
              />
            </div>
            <div className="overflow-hidden relative">
              <div className="flex">
                <button
                  onClick={runCode}
                  className="flexcode-button text-xs py-2 px-3 "
                >
                  Run Code
                </button>

                <button
                  onClick={setConsoleClicked}
                  className="flexcode-button text-xs py-2 px-3 ms-auto"
                >
                  Console
                </button>
              </div>
              <span className="block font-medium text-center">
                {consoleOutput == false
                  ? "Console log"
                  : consoleOutput.map((output, index) => (
                      <div key={index}>
                        <p></p>
                        {output}
                      </div>
                    ))}
              </span>
              <div className="my-5">
                {/* <span className="primary-color text-3xl text-center font-semibold block">Accepted</span> */}
                <p className="text-center mt-1">{outputMessage}</p>
              </div>
              {/* <div className="my-5">
                                <span className="text-red-500 text-3xl text-center font-semibold block">Wrong Answer</span>
                                <p className="text-center mt-1">You do not get points</p>
                            </div>
                            <p className="text-red-500 text-lg font-medium">
                                This is Error
                            </p> */}
            </div>
          </Split>
        </div>
      </div>
    </section>
  );
};

export default ProblemDetails;
