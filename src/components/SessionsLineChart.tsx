// import librairies
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
// import components
import CustomToolTip from '@/components/SessionsLineTooltip';

const data = [
  { name: 'L', sessionLength: 30 },
  { name: 'M', sessionLength: 40 },
  { name: 'M', sessionLength: 50 },
  { name: 'J', sessionLength: 40 },
  { name: 'V', sessionLength: 60 },
  { name: 'S', sessionLength: 70 },
  { name: 'D', sessionLength: 80 },
];

export default function SessionsLineChart() {
  return (
    <div className="bg-sportSee p-4 shadow rounded text-white w-full">
      <h2 className="text-base font-medium m-4 opacity-60">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="70%" className="center">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem',
            }}
            tickMargin={20}
          />
          <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
          <Tooltip content={<CustomToolTip />} cursor={false} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: '#FFF',
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
