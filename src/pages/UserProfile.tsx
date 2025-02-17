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

import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch';
import {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from '@/services/apiService';

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const id = Number(userId);

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const {
    data: userData,
    loading: loadingUser,
    error: errorUser,
  } = useFetch(fetchUserData, id);
  const { data: activity, loading: loadingActivity } = useFetch(
    fetchUserActivity,
    id
  );
  const { data: averageSessions, loading: loadingSessions } = useFetch(
    fetchUserAverageSessions,
    id
  );
  const { data: performance, loading: loadingPerformance } = useFetch(
    fetchUserPerformance,
    id
  );

  if (loadingUser || loadingActivity || loadingSessions || loadingPerformance)
    return <p>Chargement...</p>;
  if (errorUser) return <p className="text-sportSee">{errorUser}</p>;

  const kindMapping: { [key: number]: string } = {
    6: 'Intensité',
    5: 'Vitesse',
    4: 'Force',
    3: 'Endurance',
    2: 'Energie',
    1: 'Cardio',
  };

  const orderedSubjects = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ];

  const formattedData = orderedSubjects.map((subject) => {
    const kindKey = Object.keys(kindMapping).find(
      (key) => kindMapping[Number(key)] === subject
    );
    const item = performance?.data.find(
      (data) => data.kind === Number(kindKey)
    );
    return {
      subject,
      value: item ? item.value : 0,
    };
  });

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold">
        Bonjour{' '}
        <span className="text-sportSee">{userData?.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="flex flex-row mt-16 gap-8 h-[84%]">
        <div className="flex flex-col w-full">
          <ActivityBarsChart
            data={
              activity?.sessions.map((session, index) => ({
                name: `${index + 1}`,
                kilogram: session.kilogram,
                calories: session.calories,
              })) || []
            }
          />
          <div className="flex flex-row mt-8 gap-8 max-h-[45%] xl:max-h-72">
            <SessionsLineChart
              data={
                averageSessions?.sessions.map((session, index) => ({
                  name: days[index], // Associe l'index au jour correspondant
                  sessionLength: session.sessionLength,
                })) || []
              }
            />
            <PerformanceRadarChart data={formattedData} />
            <ScorePieChart score={userData?.todayScore || 0} />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <KeyDataCard
            label="Calories"
            value={`${userData?.keyData.calorieCount}kcal`}
            icon={calories}
            background="bg-sportSee/[.06]"
          />
          <KeyDataCard
            label="Protéines"
            value={`${userData?.keyData.proteinCount}g`}
            icon={proteines}
            background="bg-[#4AB8FF]/[.10]"
          />
          <KeyDataCard
            label="Glucides"
            value={`${userData?.keyData.carbohydrateCount}g`}
            icon={glucides}
            background="bg-[#F9CE23]/[.10]"
          />
          <KeyDataCard
            label="Lipides"
            value={`${userData?.keyData.lipidCount}g`}
            icon={lipides}
            background="bg-[#FD5181]/[.10]"
          />
        </div>
      </div>
    </div>
  );
}
