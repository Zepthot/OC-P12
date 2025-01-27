// import libraries
import React from 'react';

interface KeyDataCardProps {
  label: string;
  value: string;
  icon: string;
  background: string;
}

export default function KeyDataCard({
  label,
  value,
  icon,
  background,
}: KeyDataCardProps) {
  return (
    <div className="bg-[#FBFBFB] p-4 shadow rounded flex items-center space-x-4 w-64 h-32">
      <div className="w-16 h-16 relative rounded-md">
        <div className={`${background} absolute inset-0 rounded-md`}></div>
        <img
          src={icon}
          alt={label}
          className="w-5 h-5 relative z-10 mx-auto mt-5"
        />
      </div>
      <div className="ml-6">
        <p className="text-lg font-bold">{value}</p>
        <p className="text-gray-500 font-medium">{label}</p>
      </div>
    </div>
  );
}
