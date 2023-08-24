import React from "react";
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

const Submissions = () => {
  const data = [
    { name: "Jan", Submit: 456 },
    { name: "Feb", Submit: 230 },
    { name: "Mar", Submit: 345 },
    { name: "Apr", Submit: 450 },
    { name: "May", Submit: 321 },
    { name: "Jun", Submit: 235 },
    { name: "Jul", Submit: 267 },
    { name: "Aug", Submit: 378 },
    { name: "Sep", Submit: 210 },
    { name: "Oct", Submit: 200 },
    { name: "Nov", Submit: 150 },
    { name: "Dec", Submit: 500 },
  ];
  return (
    <div className="bg-[#1e2d40] md:ml-5 mt-4 rounded-lg pb-2">
      <div className="flex justify-between text-base-300 pt-3 px-8">
        <p className="pl-3"><span>0</span> submissions in the last year</p>
        <div className="flex gap-x-2">
          <p>Total active days: <span>0</span></p>
          <p>Max streak: <span>0</span></p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
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
