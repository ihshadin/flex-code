import React, { useState, useEffect, useContext } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import Split from "react-split";
import "./ProblemDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import SinProbLoading from "../../components/FlexcodeLoading/SinProbLoading";
import { toast } from "react-hot-toast";
import ConfettiExplosion from "react-confetti-explosion";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ProblemDetails = () => {
  const { id } = useParams();
  const [code, setCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [outputMessage, setOutputMessage] = useState("");
  const [singleProblem, setSingleProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExplosion, setIsExplosion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showFeedback = sessionStorage.getItem("showFeedback");
  const [axiosNormal] = useAxiosNormal();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [flexUser, setFlexUser] = useState(null);
  const navigate = useNavigate();

  // check user is here or not
  useEffect(() => {
    if (user) {
      axiosSecure.get(`/users?email=${user?.email}`).then((data) => {
        setFlexUser(data.data);
      });
    } else {
      setFlexUser(null);
    }
  }, [user]);

  // get all problems
  useEffect(() => {
    axiosNormal.get(`/problem/${id}`).then((data) => {
      setSingleProblems(data);
      setIsLoading(false);
    });
  }, []);

  //  Default values
  const defaultCode = `function ${singleProblem.functionName}(${singleProblem.parameterName}){
// Your solution logic

 return ;
}
`;

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    setOutputMessage("");
  };

  const userSubmission = {
    userEmail: flexUser?.email,
    username: flexUser?.username,
    date: new Date(),
    title: singleProblem.title,
    functionName: singleProblem.functionName,
    level: singleProblem.level,
    language: singleProblem.language,
    functionId: singleProblem.id,
    points: 10,
  };

  // Submit Code---------------------
  const submitCode = () => {
    try {
      // Clear console output
      setConsoleOutput("");

      // Execute code
      const userCode = `${code || defaultCode}\n\n${singleProblem.functionName
        }(${singleProblem.examples[0].input});`;

      let userOutput = eval(userCode);

      if (Array.isArray(userOutput)) {
        userOutput = JSON.stringify(userOutput);
      }

      if (typeof userOutput === "boolean") {
        userOutput = JSON.stringify(userOutput);
      }

      console.log("isOPen", isOpen);
      //   Output Message
      if (userOutput == singleProblem.examples[0].output) {
        setIsExplosion(true);

        if (!showFeedback) {
          sessionStorage.setItem("showFeedback", true);
          setTimeout(() => {
            setIsOpen(true);
          }, 5000);
        }

        // -----------------------
        axiosNormal
          .post("/solvedProblems", userSubmission)
          .then(() => {
            setOutputMessage(
              <div>
                <span className="primary-color text-2xl text-center font-semibold block">
                  Congratulations! Problem solved.
                </span>
                <p className="text-center mt-1">
                  You get{" "}
                  <span className="px-2 border border-[#0fcda1] text-white font-medium rounded-md">
                    10
                  </span>{" "}
                  points
                </p>
              </div>
            );
            // console.log(data)
          })
          .catch((err) => {
            console.log("My error =====>", err?.message);
            if (err?.response.status === 403) {
              setOutputMessage(
                <div>
                  <span className="primary-color text-2xl text-center font-semibold block">
                    Congratulations! <br /> You again solved it 🔥.
                  </span>
                </div>
              );

              toast.success("Congrats ! You solved the problem.");
            }
          });
      } else {
        setOutputMessage(
          <div>
            <span className="text-red-600 text-2xl text-center font-bold block">
              Wrong Answer
            </span>
            <p className="text-center mt-1">
              Your output does not match the expected output.
            </p>
          </div>
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setOutputMessage(
        <div className="flex gap-3">
          <span className="text-red-600 font-semibold block">
            {error.name}:
          </span>
          <span className="text-base text-gray-300">{error.message}</span>
        </div>
      );
    }
  };

  // ConsoleCode----------------------
  const consoleCode = () => {
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
      const userCode = `${code || defaultCode}\n\nconsole.log(${singleProblem.functionName
        }(${singleProblem.examples[0].input}));`;

      eval(userCode);
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
      <div className="flexcode-container">
        {isLoading ? (
          <SinProbLoading />
        ) : (
          <Split
            className="md:h-[calc(90vh-94px)] flex flex-col md:flex-row"
            direction="horizontal"
            sizes={[50, 50]}
            minSize={0}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            cursor="col-resize"
          >
            <div className="problem-exmaple w-1/2 mb-10 md:mb-0 md:overflow-y-scroll">
              <h2 className="text-2xl font-bold mb-2 primary-color">
                {singleProblem.title}
              </h2>
              <p className="leading-loose">
                {singleProblem?.problemsDetails
                  ?.split(/(\s+|,|\.)/)
                  .map((word, index, arr) => (
                    <React.Fragment key={index}>
                      {singleProblem?.highlightWords.includes(
                        word.toLowerCase()
                      ) ? (
                        <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">
                          {word}
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
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      Example {ex.example}
                    </h3>
                    <div className="bg-secondary-color p-5 rounded-xl mt-2 flex flex-col gap-1 text-gray-400">
                      <span>
                        <span className="text-white font-medium">Input:</span>{" "}
                        {ex.input}
                      </span>
                      <span>
                        <span className="text-white font-medium">Output:</span>{" "}
                        {ex.output}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {isExplosion && <ConfettiExplosion />}
            <div className="problem-exmaple w-1/2 flex flex-col md:overflow-y-scroll">
              <Split
                className="flex flex-col h-screen"
                direction="vertical"
                sizes={[60, 40]}
                minSize={0}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={0}
                dragInterval={1}
                cursor="col-resize"
              >
                <div className="bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]">
                  <div className="bg-secondary-color flex items-end">
                    <div className="flex items-center gap-2 px-4 py-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* <div className="relative h-[30px] w-[200px]">
                    <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent "></span>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                      Your Code
                    </span>
                  </div> */}
                  </div>
                  <CodeMirror
                    value={code || defaultCode}
                    onBeforeChange={handleCodeChange}
                    className="bg-transparent py-3 text-[16px]"
                    options={{
                      mode: "javascript",
                      theme: "dracula",
                      lineNumbers: true,
                      lineWrapping: true,
                      extraKeys: {
                        "Ctrl-Space": "autocomplete",
                      },
                    }}
                  />
                </div>
                <div className="overflow-hidden p-2 relative bg-slate-600 bg-opacity-10 rounded-md border border-gray-700 hover:border-[#0fcda1]">
                  <div className="flex">
                    <button
                      onClick={consoleCode}
                      className="flexcode-button text-xs py-1 px-3 mr-auto"
                    >
                      Console
                    </button>

                    {user ? (
                      <button
                        onClick={submitCode}
                        className="flexcode-button text-xs py-1 px-3"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Want to Export?",
                            text: "You need to login first!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "transparent",
                            cancelButtonColor: "red",
                            confirmButtonText: "Yes, Login!",
                            background: "#1e2d40",
                            color: "white",
                            customClass: {
                              confirmButton: "flexcode-button",
                            },
                          }).then((result) => {
                            if (result.isConfirmed) {
                              navigate("/login");
                            }
                          });
                        }}
                        className="flexcode-button text-xs py-1 px-3"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                  <span className="block font-medium text-center py-5">
                    {consoleOutput == false
                      ? ""
                      : consoleOutput.map((output, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-5"
                        >
                          <span className="bg-secondary-color text-gray-500 w-8 py-2">
                            {index + 1}
                          </span>
                          <span>{output}</span>
                        </div>
                      ))}
                  </span>
                  <div>{outputMessage}</div>
                </div>
              </Split>
            </div>
          </Split>
        )}
      </div>

      <div
        className={`modal ${isOpen === true && "modal-open"}`}
        id="subscribeFirst"
      >
        <div className="modal-box bg-black flexcode-banner-bg min-h-64 flex flex-col justify-center items-center border border-slate-600 hover:border-[#0fcda156]">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="ml-auto hover:text-[#0fcda1] text-[#0fcda1] mb-8 border-[#0fcda18c] bg-transparent"
          >
            X
          </a>
          <div>
            <h3 className="text-xl text-center mb-10">
              Share your experience with us. <br />
              Give your valuable{" "}
              <span className="text-amber-400">Feedback</span>.
            </h3>
            <Link to={"/feedback"} className="flexcode-button py-2 px-3 ml-14">
              Give Feedback
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDetails;
