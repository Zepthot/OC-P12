// import libraries
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'Intensité', value: 120 },
  { subject: 'Vitesse', value: 110 },
  { subject: 'Force', value: 130 },
  { subject: 'Endurance', value: 90 },
  { subject: 'Energie', value: 100 },
  { subject: 'Cardio', value: 85 },
];

export default function PerformanceRadarChart() {
  return (
    <div className="bg-sportSeeDark p-1 shadow rounded w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={248}>
        <RadarChart
          data={data}
          cx="50%"
          cy="50%"
          outerRadius="85%"
          margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: '#FFFFFF',
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            fill="#FF0101"
            stroke="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
