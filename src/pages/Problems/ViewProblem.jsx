import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import Split from "react-split";

import './ViewProblem.css'

const ViewProblem = () => {

    const [code, setCode] = useState('console.log("Hello, world!");');
    const [consoleOutput, setConsoleOutput] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");

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
        <section>
            <div className="flexcode-container flex gap-10">
                <div className="w-1/2">
                    <p className="leading-loose">
                        Given an array of integers <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">nums</span> and an integer <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">target</span>, return indices of the two numbers such that they add up to <span className="px-2 border border-[#0fcda1] primary-color font-medium rounded-md">target</span>.
                        <br /><br />
                        You may assume that each input would have exactly one <b>solution</b>, and you may not use the same element twice.
                        <br /><br />
                        You can return the answer in any order.
                    </p>
                    <div className="flex flex-col gap-6 mt-10">
                        <div>
                            <h3 className="text-xl font-semibold">Example 1</h3>
                            <div className="bg-secondary-color p-5 rounded-xl mt-2 flex flex-col gap-1 text-gray-400">
                                <span><b className="text-white font-semibold">Input:</b> nums = [2,7,11,15], target = 9</span>
                                <span><b className="text-white font-semibold">Output:</b> [0,1]</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Example 2</h3>
                            <div className="bg-secondary-color p-5 rounded-xl mt-2 flex flex-col gap-1 text-gray-400">
                                <span><b className="text-white font-semibold">Input:</b> nums = [2,7,11,15], target = 9</span>
                                <span><b className="text-white font-semibold">Output:</b> [0,1]</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Example 3</h3>
                            <div className="bg-secondary-color p-5 rounded-xl mt-2 flex flex-col gap-1 text-gray-400">
                                <span><b className="text-white font-semibold">Input:</b> nums = [2,7,11,15], target = 9</span>
                                <span><b className="text-white font-semibold">Output:</b> [0,1]</span>
                            </div>
                        </div>
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
                        <div className="overflow-hidden relative">
                            <button className="flexcode-button text-xs py-2 px-3 ms-auto">Run Code</button>
                            <span className="block font-medium text-center">Console Log</span>
                            <div className="my-5">
                                <span className="primary-color text-3xl text-center font-semibold block">Accepted</span>
                                <p className="text-center mt-1">You are get 10 points</p>
                            </div>
                            <p className="text-red-500 text-lg font-medium">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Consequatur nisi neque nobis expedita rerum consectetur corporis
                                velit assumenda quidem, earum facilis hic impedit nam culpa
                                natus sequi incidunt nemo nesciunt, maxime ad odit ut animi aut
                                excepturi! Laudantium rerum totam sequi facilis commodi,
                                deleniti ab asperiores voluptas quae inventore magni delectus
                                tempore consequatur dolorum id soluta quo labore reiciendis.
                                Suscipit aperiam voluptatibus quia omnis vero animi, nostrum
                                dignissimos at est? Quo ipsam rem a asperiores? Reiciendis
                                corporis vero quia, natus animi ab sunt molestias architecto
                                necessitatibus ducimus aliquid doloribus. Esse impedit, mollitia
                                eius blanditiis perspiciatis unde expedita. Quisquam, quos
                                aspernatur!
                            </p>
                        </div>
                    </Split>
                </div>
            </div>
        </section>
    );
};

export default ViewProblem;