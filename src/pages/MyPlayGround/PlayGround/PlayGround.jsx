import "codemirror/theme/dracula.css";
import React, { useEffect, useState } from "react";
import { Controlled } from "react-codemirror2";
import Split from "react-split";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "./PlayGround.css";
import projectsCode from "../../../../public/projects.json";

const PlayGround = () => {
  const [htmlCode, setHtmlCode] = useState(""); //projectsCode[0].htmlCode ||
  const [cssCode, setCssCode] = useState(""); //projectsCode[0].cssCode ||
  const [jsCode, setJsCode] = useState(""); //projectsCode[0].jsCode ||
  const [consoleOutput, setConsoleOutput] = useState("");
  const [errorOutput, setErrorOutput] = useState("");
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [splitSizes, setSplitSizes] = useState([55, 55]);

  useEffect(() => {
    const updateSplitSizes = () => {
      const isLargeDevice = window.innerWidth >= 768;

      if (isLargeDevice) {
        setSplitSizes([55, 55]);
      } else {
        setSplitSizes([70, 30]);
      }
    };

    // Initial update based on window size
    updateSplitSizes();

    window.addEventListener("resize", updateSplitSizes);

    return () => {
      window.removeEventListener("resize", updateSplitSizes);
    };
  }, []);

  const openConsole = () => {
    setIsConsoleOpen(true);
    runCode();
  };

  const closeConsole = () => {
    setIsConsoleOpen(false);
  };

  const runCode = () => {
    try {
      // Clear previous outputs
      setConsoleOutput("");
      setErrorOutput("");

      const consoleLogMessages = [];

      // HTML
      try {
        // Create iframe and assemble full HTML page
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        const iframeWindow = iframe.contentWindow;
        const fullHtml = `<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`;
        iframeWindow.document.open();
        iframeWindow.document.write(fullHtml);
        iframeWindow.document.close();
        document.body.removeChild(iframe);
      } catch (htmlError) {
        setErrorOutput(htmlError.message);
        return;
      }

      //   JavaScript
      try {
        // Capture console.log output
        const originalConsoleLog = console.log;
        console.log = (message) => {
          consoleLogMessages.push(message);
          originalConsoleLog(message);
        };

        // Execute JavaScript
        const jsFunction = new Function(jsCode);
        jsFunction();

        // Restore original console.log
        console.log = originalConsoleLog;

        // Set console output
        setConsoleOutput(consoleLogMessages.join("\n")); // Join logs with newline
      } catch (error) {
        setErrorOutput(error.message);
      }
    } catch (outerError) {
      setErrorOutput(outerError.message);
    }
  };

  return (
    <div className="relative p-4 overflow-hidden ">
      <Split
        className="flex flex-col h-[160vh] md:h-[100vh] pt-16 md:pt-0"
        direction="vertical"
        sizes={splitSizes}
        minSize={0}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={0}
        dragInterval={1}
        cursor="col-resize"
      >
        <div className="flex flex-col md:flex-row w-full gap-3">
          <div className="w-full h-[16rem] md:h-full bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-500 hover:border-[#0fcda1]">
            <div className="bg-secondary-color flex items-end">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="relative h-[30px] w-[200px]">
                <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent"></span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                  HTML
                </span>
              </div>
            </div>
            <Controlled
              value={htmlCode}
              onBeforeChange={(editor, data, value) => setHtmlCode(value)}
              options={{
                mode: "css",
                theme: "dracula",
                lineNumbers: true,
                lineWrapping: true,
                extraKeys: {
                  "Ctrl-Space": "autocomplete",
                },
              }}
            />
          </div>
          <div className="w-full h-[16rem] md:h-full bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]">
            <div className="bg-secondary-color flex items-end">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="relative h-[30px] w-[200px]">
                <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent "></span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                  CSS
                </span>
              </div>
            </div>
            <Controlled
              value={cssCode}
              onBeforeChange={(editor, data, value) => setCssCode(value)}
              options={{
                mode: "css",
                theme: "dracula",
                lineNumbers: true,
                lineWrapping: true,
                extraKeys: {
                  "Ctrl-Space": "autocomplete",
                },
              }}
            />
          </div>
          <div className="w-full h-[16rem] md:h-full bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]">
            <div className="bg-secondary-color flex items-end">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="relative h-[30px] w-[200px]">
                <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent "></span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                  JavaScript
                </span>
              </div>
            </div>
            <Controlled
              value={jsCode}
              onBeforeChange={(editor, data, value) => setJsCode(value)}
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
            {/* <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={runCode}
          >
            Run
          </button> */}
          </div>
        </div>

        <div className="h-auto relative">
          <iframe
            className="w-full h-full pt-4 bg-white rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]"
            srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`}
          />

          {isConsoleOpen ? (
            <div className="absolute top-0 w-full text-white h-full">
              <div className="relative flex justify-between w-full bg-[#1e2d40] bg-opacity-90 top-0">
                <button
                  className="absolute top-0 right-0 mr-2 text-gray-400 hover:text-white"
                  onClick={closeConsole}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h1 className="ml-2">Console</h1>
              </div>
              <div className="h-full bg-[#1c1f23] text-white p-2">
                {/* {consoleOutput?.map((output, index) => (
               <div key={index} className="mb-1">
                 {output}
               </div>
             ))} */}

                <div>{consoleOutput}</div>
                <div className="text-red-500">{errorOutput}</div>
              </div>
            </div>
          ) : (
            <div className="flex justify-end absolute top-0 bg-[#1e2d40] bg-opacity-90 w-full py-1">
              <button
                onClick={openConsole}
                className="text-xs px-2 btn-ghost bg-slate-500 rounded mr-1"
              >
                Console
              </button>
            </div>
          )}
        </div>
      </Split>
    </div>
  );
};

export default PlayGround;
