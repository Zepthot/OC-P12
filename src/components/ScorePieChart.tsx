// import libraries
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

interface ScorePieChartProps {
  score: number;
}

export default function ScorePieChart({ score }: ScorePieChartProps) {
  return (
    <div className="bg-[#FBFBFB] p-4 shadow rounded text-center w-full">
      <h2 className="absolute text-base font-medium ml-4 mt-2">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="0%"
          outerRadius="0%"
          data={[{ value: score }]}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            fill="#FFF"
            isAnimationActive={false}
            barSize={190}
          />
          <RadialBar
            fill="#FF0000"
            cornerRadius={50}
            dataKey="value"
            barSize={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="relative bottom-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl font-bold">{score * 100}%</p>
        <p className="text-gray-500 font-medium text-sm">de votre objectif</p>
      </div>
    </div>
  );
}
