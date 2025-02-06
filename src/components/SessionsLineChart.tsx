import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import CustomToolTip from '@/components/SessionsLineTooltip';

interface SessionsLineChartProps {
  data: { name: string; sessionLength: number }[];
}

export default function SessionsLineChart({ data }: SessionsLineChartProps) {
  const [cursorX, setCursorX] = useState<number | null>(null);

  return (
    <div className="bg-sportSee p-4 shadow rounded text-white w-full relative">
      <h2 className="text-base font-medium m-4 opacity-60">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="70%" className="center rounded">
        <LineChart
          data={data}
          onMouseMove={(e) => {
            if (e && e.activeCoordinate) {
              setCursorX(e.activeCoordinate.x);
            }
          }}
          onMouseLeave={() => setCursorX(null)}
        >
          {/* Zone sombre dynamique */}
          {cursorX !== null && (
            <rect
              x={cursorX}
              y={0}
              width={400} // Largeur arbitraire qui dépasse la zone visible
              height="120%"
              fill="rgba(0, 0, 0, 0.3)"
            />
          )}

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
