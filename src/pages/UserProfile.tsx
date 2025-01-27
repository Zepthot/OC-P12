// import libraries
import React from 'react';
// import components
import ActivityBarsChart from '@/components/ActivityBarsChart';
import SessionsLineChart from '@/components/SessionsLineChart';
import PerformanceRadarChart from '@/components/PerformanceRadarChart';
import ScorePieChart from '@/components/ScorePieChart';
import KeyDataCard from '@/components/KeyDataCard';
// import assets
import calories from '@/assets/icons/energy.svg';
import proteines from '@/assets/icons/chicken.svg';
import glucides from '@/assets/icons/apple.svg';
import lipides from '@/assets/icons/cheeseburger.svg';

export default function UserProfile() {
  const data = {
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold">
        Bonjour <span className="text-sportSee">Thomas</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="flex flex-row mt-16 gap-8 h-[84%]">
        <div className="flex flex-col w-full">
          <ActivityBarsChart />
          <div className="flex flex-row mt-8 gap-8 max-h-72">
            <SessionsLineChart />
            <PerformanceRadarChart />
            <ScorePieChart />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <KeyDataCard
            label="Calories"
            value={`${data.keyData.calorieCount}kcal`}
            icon={calories}
            background="bg-sportSee/[.06]"
          />
          <KeyDataCard
            label="Protéines"
            value={`${data.keyData.proteinCount}g`}
            icon={proteines}
            background="bg-[#4AB8FF]/[.10]"
          />
          <KeyDataCard
            label="Glucides"
            value={`${data.keyData.carbohydrateCount}g`}
            icon={glucides}
            background="bg-[#F9CE23]/[.10]"
          />
          <KeyDataCard
            label="Lipides"
            value={`${data.keyData.lipidCount}g`}
            icon={lipides}
            background="bg-[#FD5181]/[.10]"
          />
        </div>
      </div>
    </div>
  );
}
