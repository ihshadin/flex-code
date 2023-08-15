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
    { name: "Jan", submit: 456 },
    { name: "Feb", submit: 230 },
    { name: "Mar", submit: 345 },
    { name: "Apr", submit: 450 },
    { name: "May", submit: 321 },
    { name: "Jun", submit: 235 },
    { name: "Jul", submit: 267 },
    { name: "Aug", submit: 378 },
    { name: "Sep", submit: 210 },
    { name: "Oct", submit: 200 },
    { name: "Nov", submit: 150 },
    { name: "Dec", submit: 500 },
  ];
  return (
    <div className="bg-[#1e2d40] md:ml-5 mt-4 rounded-lg ">
      <div className="flex justify-between text-base-300 pt-3 px-8">
        <p className="pl-3">0 submissions in the last year</p>
        <div className="flex gap-x-2">
          <p>Total active days:0 </p>
          <p>Max streak:0</p>
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
          <Tooltip labelStyle={{ color: "black" }} />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "10px" }} />
          <ReferenceLine y={0} stroke="#000ffc3" />
          <Brush dataKey="name" height={30} stroke="#000" />
          <Bar
            dataKey="submit"
            fill="#00ffc3"
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
