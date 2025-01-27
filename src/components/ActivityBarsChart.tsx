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

const data = [
  { name: '1', kilogram: 70, calories: 240 },
  { name: '2', kilogram: 69.2, calories: 220 },
  { name: '3', kilogram: 70, calories: 250 },
  { name: '4', kilogram: 70.8, calories: 270 },
  { name: '5', kilogram: 70, calories: 260 },
  { name: '6', kilogram: 70, calories: 240 },
  { name: '7', kilogram: 70, calories: 250 },
  { name: '8', kilogram: 70.2, calories: 290 },
  { name: '9', kilogram: 69.6, calories: 280 },
  { name: '10', kilogram: 69.9, calories: 300 },
];

export default function ActivityChart() {
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
          margin={{ top: 100, right: 40, bottom: 32, left: 16 }}
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
            domain={[
              (dataMin: number) => Math.round(dataMin),
              (dataMax: number) => Math.round(dataMax),
            ]}
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
            domain={['dataMin - 20', 'dataMax + 10']}
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
