import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "./CodeEditor.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello, world!");');
  const [consoleOutput, setConsoleOutput] = useState([]);
  // const [selectedLanguage, setSelectedLanguage] = useState("javascript");

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
      eval(code);

      // Restore console.log
      console.log = originalLog;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flexcode-container relative md:mb-4">
      <SectionTitle
        title=" Flex Your Knowledge"
        descrition="Unlock the power of problem solving"
      />
      <div className="relative md:flex gap-5">
        {/* start editor  */}
        <div className="md:w-1/2 rounded-lg overflow-hidden border border-gray-500 hover:border-[#0fcda1] transition-all drop-shadow-md">
          <div className="bg-secondary-color flex items-end">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="relative h-[30px] w-[200px]">
              <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent "></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                Your Code
              </span>
            </div>

            <button
              onClick={runCode}
              className="relative h-[30px] w-[180px] ms-auto mb-[3px] hidden md:block"
            >
              <span className="absolute left-0 bottom-0.5 w-[50px] block border-b-[12px] border-b-transparent opacity-50 border-r-[30px] border-r-[#0fcda1] border-t-[12px] border-t-transparent "></span>
              <span className="bg-[#0fcda1] bg-opacity-50 rounded-md p-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                Run Code
              </span>
              <span className="absolute right-0 bottom-0.5 w-[50px] block border-b-[12px] border-b-transparent opacity-50 border-l-[30px] border-l-[#0fcda1] border-t-[12px] border-t-transparent "></span>
            </button>
          </div>
          <div className="min-h-[350px] overflow-auto">
            <CodeMirror
              value={code}
              onBeforeChange={(editor, data, value) => setCode(value)}
              className="bg-transparent py-3 text-[16px]"
              options={{
                mode: "javascript",
                theme: "dracula",
                lineNumbers: true,
              }}
            />
          </div>
        </div>
        {/* end editor  */}

        <button
          onClick={runCode}
          className="relative mt-2 md:mt-0 md:absolute left-1/2 bottom-0 md:-bottom-20 -translate-x-1/2 flexcode-button py-2 md:py-3 px-5 md:px-6 text-xs md:text-base"
        >
          Run Your Code
        </button>

        {/* start preview  */}
        <div className="md:w-1/2 rounded-lg overflow-hidden border border-gray-500 hover:border-[#0fcda1] transition-all drop-shadow-md mt-4 md:mt-0">
          <div className="bg-secondary-color flex items-end">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="relative h-[30px] w-[200px]">
              <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent "></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-white">
                Preview
              </span>
            </div>
          </div>
          <div className="min-h-[350px] overflow-auto px-4 py-3">
            {consoleOutput.map((output, index) => (
              <div key={index}>{output}</div>
            ))}
          </div>
        </div>
        {/* end preview  */}
      </div>
    </div>
  );
};

export default CodeEditor;
