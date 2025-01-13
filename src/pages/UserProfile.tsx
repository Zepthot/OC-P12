// src/pages/UserProfile.tsx
import React from 'react';
import ActivityBarsChart from '@/components/ActivityBarsChart';

export default function UserProfile() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold">
        Bonjour <span className="text-sportSee">Thomas</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <div className="flex flex-col mt-20 w-full">
        <ActivityBarsChart />
        <div className="flex flex-row mt-8"></div>
      </div>
    </div>
  );
}
