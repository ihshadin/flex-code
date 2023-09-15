import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import Split from "react-split";
import "../Problems/ProblemDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import SinProbLoading from "../../components/FlexcodeLoading/SinProbLoading";
import ConfettiExplosion from "react-confetti-explosion";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Timer from "../../components/Timer/Timer";

const Single = () => {
  const { id } = useParams();
  const [code, setCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [outputMessage, setOutputMessage] = useState("");
  const [singleProblem, setSingleProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExplosion, setIsExplosion] = useState(false);
  const [axiosNormal] = useAxiosNormal();
  const { user } = useAuth();
  const [flexUser, setFlexUser] = useState([]);
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { state } = useLocation()
  console.log(state?.username, flexUser?.username, time, state?.timeStamp);

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

  const challenge = {
    sender: flexUser?.username,
    receiver: state?.username,
    message: `You got a challenge from ${flexUser?.username}`,
    problem: singleProblem?.title,
    problemId: singleProblem?._id,
    timeStamp: time
  }
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

      // console.log("isOPen", isOpen);


      //   Output Message
      if (userOutput == singleProblem.examples[0].output) {


        // if (!showFeedback) {
        //   sessionStorage.setItem("showFeedback", true);
        //   setTimeout(() => {
        //     setIsOpen(true);
        //   }, 5000);
        // }
        console.log(challenge);

        if (!state?.timeStamp) {
          setIsExplosion(true);
          axiosNormal.post('/challenge', challenge).then(() => {
            setIsRunning(false);
            setOutputMessage(
              <div>
                <span className="primary-color text-2xl text-center font-semibold block">
                  Congratulations! Problem solved.
                </span>
                <p className="text-center mt-1">
                  Your time is{" "}
                  <span className="px-2 border border-[#0fcda1] text-white font-medium rounded-md">
                    {time}
                  </span>{" "}
                  seconds
                </p>
              </div>
            );
          })

        } else {
          const winner = state?.timeStamp > time ? flexUser?.username : state?.username;
          const winnerTime = state?.timeStamp > time ? time : state?.timeStamp;
          console.log(winner, winnerTime);

          axiosNormal.put(`/challenge/one/${state?.id}/${state?.ownId}`, {
            winner, winnerTime
          }).then(data => {
            {
              state?.timeStamp > time ?
                Swal.fire({
                  title: "You Win",
                  icon: "success",
                  confirmButtonText: "OK",
                })
                :
                Swal.fire({
                  title: "You Lose",
                  icon: "error",
                  confirmButtonText: "OK",
                })
            }
            console.log('winner --->', data);
          })



          if (state?.timeStamp > time) {
            setIsExplosion(true);
          }
          setIsRunning(false);


          setOutputMessage(
            <div>
              <span className="primary-color text-2xl text-center font-semibold block">
                Congratulations! Problem solved.
              </span>
              <p className="text-center mt-1">
                Your time is{" "}
                <span className="px-2 border border-[#0fcda1] text-white font-medium rounded-md">
                  {time}
                </span>{" "}
                seconds
              </p>
            </div>
          );
        }
        // socket.emit("sendNotification", notification);


        // -----------------------

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
                  .map((word, index) => (
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


              {/* Timer    */}

              <div className="flex flex-row-reverse mr-6 mb-2">
                <Timer setTime={setTime} setIsRunning={setIsRunning} isRunning={isRunning} />
              </div>


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
                        className={`flexcode-button text-xs py-1 px-3 ${isRunning <= 0 && 'btn-disabled opacity-30'}`}
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

    </section>
  );
};

export default Single;
