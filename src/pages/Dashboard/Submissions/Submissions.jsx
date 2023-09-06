import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Submission.css";

const Submissions = ({ mySolvedProblems }) => {
  const [filteredProblems, setFilteredProblems] = useState([]);
  const [problemsSolvedLastYear, setProblemsSolvedLastYear] = useState(0);
  const [activeDaysCount, setActiveDaysCount] = useState(0);

  const monthOrder = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  useEffect(() => {
    const countProblemsByMonth = () => {
      const problemsCount = {};
      const activeDays = new Set();
      const currentYear = new Date().getFullYear();

      mySolvedProblems.forEach((problem) => {
        const problemYear = new Date(problem.date).getFullYear();
        const problemMonth = new Date(problem.date).getMonth();
        const problemDate = new Date(problem.date).toLocaleDateString();

        if (problemYear === currentYear) {
          if (problemsCount[problemMonth]) {
            problemsCount[problemMonth]++;
          } else {
            problemsCount[problemMonth] = 1;
          }
        }
        activeDays.add(problemDate);
      });

      const newData = monthOrder.map((month, index) => ({
        name: month,
        Submit: problemsCount[index] || 0,
      }));
      setFilteredProblems(newData);
      const numberOfActiveDays = activeDays.size;
      setActiveDaysCount(numberOfActiveDays);
    };

    countProblemsByMonth();
  }, [mySolvedProblems]);

  useEffect(() => {
    const today = new Date();
    const lastYear = today.getFullYear() - 1;

    const problemsSolvedLastYear = mySolvedProblems.filter(
      (problem) => new Date(problem.date).getFullYear() === lastYear
    ).length;

    setProblemsSolvedLastYear(problemsSolvedLastYear);
  }, [mySolvedProblems]);


  return (
    <div className="bg-secondary-color text-white rounded-lg pb-2">
      <div className="flex flex-col md:flex-row md:flex-center justify-between text-base-300 pt-3 px-3 md:px-8">
        <p className=""><span>{problemsSolvedLastYear}</span> submissions in the last year</p>
        <div className="flex self-end gap-x-2">
          <p>Total active days: <span>{activeDaysCount}</span></p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={filteredProblems}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ color: "black" }} />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2d40b0",
              border: "1px solid #fff",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "#ffffff", fontSize: "18px", fontWeight: "semibold" }}
            itemStyle={{ color: "#ffffff" }}
          />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "10px" }} />
          <ReferenceLine y={0} stroke="#0fcda1" />
          <Brush dataKey="name" height={20} stroke="#fff" fill="#1e2d40" />
          <Bar
            dataKey="Submit"
            fill="#0fcda1"
            //   fill="#1e2d40" // Background color
            className="hover:bg-black rounded-bar"
            barSize={12}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Submissions;