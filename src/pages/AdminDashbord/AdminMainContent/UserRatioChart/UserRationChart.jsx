import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const UserRationChart = () => {
  const userRatioChartData = [
    { name: "Jan", ratio: 30 },
    { name: "Feb", ratio: 45 },
    { name: "Mar", ratio: 50 },
    { name: "Apr", ratio: 55 },
    { name: "May", ratio: 60 },
    { name: "Jun", ratio: 69 },
    { name: "Jul", ratio: 40 },
    { name: "Aug", ratio: 33 },
    { name: "Sep", ratio: 56 },
    { name: "Oct", ratio: 80 },
    { name: "Nob", ratio: 10 },
    { name: "Dec", ratio: 90 },
  ];

  return (
    <div className="elfsight-app-57516a4c-1b1e-432e-abd5-7e089746d675 border-2 border-gray-400 rounded-lg mx-6 text-center py-8">
      <div className="elfsight-app-57516a4c-1b1e-432e-abd5-7e089746d675"></div>
    </div>

    // <ResponsiveContainer width="100%" height={200}>
    // <LineChart  data={userRatioChartData}>
    //   {/* <CartesianGrid  /> */}
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line type="monotone" dataKey="ratio" stroke="#82ca9d" />
    // </LineChart>
    // </ResponsiveContainer>
  );
};

export default UserRationChart;
