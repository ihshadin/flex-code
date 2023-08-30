import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProblemsChart = () => {
    const outerData = [
        { name: 'Web', value: 100 },
        { name: 'Web', value: 100 },
        { name: 'Web', value: 100 },
        { name: 'Web', value: 100 },
        { name: 'Web', value: 100 },
        { name: 'Web', value: 100 },
      ];
    
      const innerData = [
        { name: 'JavaScript', value: 70 },
        { name: 'Python', value: 20 },
        { name: 'C++', value: 10 },
        { name: 'C', value: 5 },
      ];
    
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        // Calculate the line coordinates
        const startX = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
        const startY = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
        const endX = cx + (outerRadius + 40) * Math.cos(-midAngle * RADIAN);
        const endY = cy + (outerRadius + 40) * Math.sin(-midAngle * RADIAN);
    
        return (
          <g>
            {/* Line */}
            <line
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth="2"
            />
            {/* Text label */}
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central"
            >
              {`${innerData[index].name} ${(percent * 100).toFixed(0)}%`}
            </text>
          </g>
        );
      };
    
      return (
        <div style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer>
            <PieChart>
              {/* Outer Pie */}
              <Pie
                data={outerData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={100}
                fill="#8884d8"
                dataKey="value"
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                isAnimationActive={false}
              >
                {outerData.map((entry, index) => (
                  <Cell key={`cell-outer-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
    
              {/* Inner Pie */}
              <Pie
                data={innerData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                label={renderCustomizedLabel}
                paddingAngle={2}
              >
                {innerData.map((entry, index) => (
                  <Cell key={`cell-inner-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
    );
};

export default ProblemsChart;