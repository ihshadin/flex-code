import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const PreProject = () => {
  const [axiosSecure] = useAxiosSecure();
  const [project, setproject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosSecure.get(`/playground/${id}`).then((data) => {
      console.log("pre-project--13---", data?.data);
      setproject(data?.data);
    });
  }, []);

  const [combinedCode, setCombinedCode] = useState("");

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
      <iframe
        title="Preview"
        srcDoc={combinedCode}
        width="100%"
        height="100%"
        sandbox="allow-scripts allow-same-origin"
        className="w-full min-h-screen mb-10 bg-white rounded-xl overflow-hidden border border-gray-700 hover:border-[#0fcda1]"
      />
    </div>
  );
};

export default PreProject;
