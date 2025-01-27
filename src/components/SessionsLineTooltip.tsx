// import librairies
import React from 'react';
import { TooltipProps } from 'recharts';

export default function CustomToolTip({
  active,
  payload,
}: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 text-xs">
        <p>{payload[0].value + ' min'}</p>
      </div>
    );
  }
  return null;
}
