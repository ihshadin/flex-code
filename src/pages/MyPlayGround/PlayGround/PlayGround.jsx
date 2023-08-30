import "codemirror/theme/dracula.css";
import React, { useState } from "react";
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
import "./PlayGround.css"

const PlayGround = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState("");
  const [errorOutput, setErrorOutput] = useState("");

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

      //   CSS and JavaScript
      //     try {
      // //   Capture console.log output
      //   const originalConsoleLog = console.log;
      //   console.log = (message) => {
      //     consoleLogMessages.push(message);
      //     originalConsoleLog(message);
      //   };

      // //   Execute JavaScript
      //   const iframe = document.createElement('iframe');
      //   iframe.style.display = 'none';
      //   document.body.appendChild(iframe);
      //   const iframeWindow = iframe.contentWindow;
      //   iframeWindow.eval(jsCode);
      //   document.body.removeChild(iframe);

      // //   Restore original console.log
      //   console.log = originalConsoleLog;

      // //   Set console output
      //   setConsoleOutput(consoleLogMessages.join(' '));
      //     } catch (error) {
      //       setErrorOutput(error.message);
      //     }

      //   } catch (outerError) {
      //     setErrorOutput(outerError.message);
      //   }

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
    <div className="p-4 overflow-hidden">
        <Split
          className="flex flex-col h-screen"
          direction="vertical"
          sizes={[75, 25]}
          minSize={0}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={0}
          dragInterval={1}
          cursor="col-resize"
        >
      <div className="md:flex w-full gap-3 mt-10">
        <div className="w-full bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-500 hover:border-[#0fcda1]">
          <div className="bg-secondary-color flex items-end">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="relative h-[30px] w-[200px]">
              <span className="absolute left-0 bottom-0 w-[200px] block border-b-[30px] border-b-[#0fcda1] opacity-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent "></span>
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
        <div className="w-full bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]">
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
        <div className="w-full bg-slate-600 bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]">
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

      <div className="w-full">
        
          <div className="bg-transparent bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]">
            {/* <h2 className="mb-2 text-xl font-semibold">Preview</h2> */}
            <iframe
              className="w-full h-64 border border-gray-300 "
              srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`}
            />
          </div>
      </div>
    </Split>

      {/* <div className="w-1/2 p-4 border border-gray-300 rounded">
        <h2 className="mb-2 text-xl font-semibold">Console Output</h2>
        <div className="overflow-auto h-32 p-2 bg-gray-100 rounded">
          {consoleOutput}
        </div>
      </div> */}
      {/* <div className="w-full p-4 border border-gray-300 rounded">
        <h2 className="mb-2 text-xl font-semibold">Errors</h2>
        <div className="overflow-auto h-32 p-2 bg-red-100 text-red-600 rounded">
          {errorOutput}
        </div>
      </div> */}
    </div>
  );
};

export default PlayGround;
