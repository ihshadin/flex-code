import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

const UserRationChart = () => {

  const userRatioChartData = [
    { name: 'Jan', ratio: 30 },
    { name: 'Feb', ratio: 45 },
    { name: 'Mar', ratio: 50 },
    { name: 'Apr', ratio: 55 },
    { name: 'May', ratio: 60 },
    { name: 'Jun', ratio: 69 },
    { name: 'Jul', ratio: 40 },
    { name: 'Aug', ratio: 33 },
    { name: 'Sep', ratio: 56 },
    { name: 'Oct', ratio: 80 },
    { name: 'Nob', ratio: 10 },
    { name: 'Dec', ratio: 90 },
  ];

  return (
    <div className="w-full flexcode-banner-bg px-5 py-6 rounded-xl border border-slate-500 hover:border-[#0fcda18c]">
      <h3 className="text-xl font-medium mb-4 ps-5">
        User Ratio Over Time
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={userRatioChartData} >
          <CartesianGrid strokeDasharray="0.5 10" />
          <XAxis dataKey="name" tick={{ fill: '#ffffff56', transform: 'capitalize' }} />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2d40b0",
              border: "1px solid #fff",
              borderRadius: "10px",
              padding: "5px 15px"
            }}
            labelStyle={{ color: "#ffffff", fontSize: "18px", fontWeight: "semibold" }}
            itemStyle={{ color: "#ffffff" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="ratio"
            stroke="#0fcda1"
            // className="hover:stroke-black !hover:fill-black"
            fill="#0fcda1"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRationChart;