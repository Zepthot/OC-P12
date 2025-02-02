// import librairies
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
// import components
import ActivityBarsTooltip from '@/components/ActivityBarsTooltip';

interface ActivityBarsChartProps {
  data: { name: string; kilogram: number; calories: number }[];
}

export default function ActivityBarsChart({ data }: ActivityBarsChartProps) {
  return (
    <div className="bg-[#FBFBFB] p-4 shadow rounded h-1/2">
      <h2 className="text-lg font-medium mb-4 ml-4 mt-2 absolute text-[#20253A]">
        Activité quotidienne
      </h2>
      <div className="flex relative justify-end right-2 mt-2 text-[#74798C]">
        <p className="ml-8">
          <span className="bg-sportSeeDark inline-block w-2 h-2 rounded-full mr-2"></span>
          Poids (kg)
        </p>
        <p className="ml-8">
          <span className="bg-sportSee inline-block w-2 h-2 rounded-full mr-2"></span>
          Calories brûlées (kCal)
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 40, bottom: 32, left: 16 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid vertical={false} strokeDasharray="3" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 14, stroke: '#9B9EAC', strokeWidth: 0.5 }}
            dy={15}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={['dataMin-2', 'dataMax+1']}
            tickCount={3}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14, stroke: '#9B9EAC', strokeWidth: 0.5 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={['dataMin - 50', 'dataMax + 50']}
            hide={true}
          />
          <Tooltip
            content={({ payload }) =>
              payload ? <ActivityBarsTooltip payload={payload} /> : null
            }
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
