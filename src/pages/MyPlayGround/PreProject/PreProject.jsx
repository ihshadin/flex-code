import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const PreProject = () => {
  const [axiosSecure] = useAxiosSecure();
  const [project, setproject] = useState({});
  const { id } = useParams();
  const [combinedCode, setCombinedCode] = useState("");

  useEffect(() => {
    axiosSecure.get(`/playground/${id}`).then((data) => {
      setproject(data?.data);
    });
  }, []);


  useEffect(() => {
    // Combine HTML, CSS, and JavaScript code
    const fullCode = `
          <html>
          <head>
            <style>${project?.cssCode}</style>
          </head>
          <body>
            ${project?.htmlCode}
            <script>${project?.jsCode}</script>
          </body>
          </html>
        `;
    setCombinedCode(fullCode);
  }, [project?.htmlCode, project?.cssCode, project?.jsCode]);

  return (
    <div>
      <Helmet title="FlexCode || My Project"/>
      {
        Object.keys(project).length === 0 ? (
          <div className='bg-slate-500 animate-pulse bg-opacity-50 h-screen w-[100%] rounded-lg'>
            <div className='h-10 border-b border-slate-500 flex items-center gap-3 px-4'>
              <div className='bg-slate-400 animate-bounce bg-opacity-50 h-3 w-3 rounded-full'></div>
              <div className='bg-slate-400 animate-bounce bg-opacity-50 h-3 w-3 rounded-full'></div>
              <div className='bg-slate-400 animate-bounce bg-opacity-50 h-3 w-3 rounded-full'></div>
            </div>
            <div className='flex flex-col gap-3 px-4 py-3'>
              <div className='bg-slate-400 animate-pulse bg-opacity-50 h-3 w-[35%] rounded-full'></div>
              <div className='bg-slate-400 animate-pulse bg-opacity-50 h-3 w-[15%] rounded-full'></div>
              <div className='bg-slate-400 animate-pulse bg-opacity-50 h-3 w-[24%] rounded-full'></div>
            </div>
          </div>
        ) : (
          <iframe
            title="Preview"
            srcDoc={combinedCode}
            width="100%"
            height="100%"
            sandbox="allow-scripts allow-same-origin"
            className="w-full min-h-screen mb-10 bg-white rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]"
          />
        )
      }
    </div>
  );
};

export default PreProject;
