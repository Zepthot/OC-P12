import {
  UserData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from '@/utils/interfaces';

export const mockUserData: UserData = {
  id: 18,
  userInfos: { firstName: 'Jean', lastName: 'Dupont', age: 34 },
  todayScore: 0.76,
  keyData: {
    calorieCount: 2000,
    proteinCount: 160,
    carbohydrateCount: 300,
    lipidCount: 100,
  },
};

export const mockUserActivity: UserActivity = {
  userId: 18,
  sessions: [
    { day: '2024-02-01', kilogram: 72, calories: 240 },
    { day: '2024-02-02', kilogram: 72, calories: 260 },
    { day: '2024-02-03', kilogram: 71, calories: 220 },
    { day: '2024-02-04', kilogram: 71, calories: 290 },
    { day: '2024-02-05', kilogram: 70, calories: 300 },
    { day: '2024-02-06', kilogram: 70, calories: 320 },
    { day: '2024-02-07', kilogram: 69, calories: 280 },
  ],
};

export const mockUserAverageSessions: UserAverageSessions = {
  userId: 18,
  sessions: [
    { day: '1', sessionLength: 30 }, // Lundi
    { day: '2', sessionLength: 23 }, // Mardi
    { day: '3', sessionLength: 45 }, // Mercredi
    { day: '4', sessionLength: 50 }, // Jeudi
    { day: '5', sessionLength: 35 }, // Vendredi
    { day: '6', sessionLength: 60 }, // Samedi
    { day: '7', sessionLength: 25 }, // Dimanche
  ],
};

export const mockUserPerformance: UserPerformance = {
  userId: 18,
  kind: {
    '1': 'cardio',
    '2': 'energy',
    '3': 'endurance',
    '4': 'strength',
    '5': 'speed',
    '6': 'intensity',
  },
  data: [
    { value: 110, kind: 6 }, // Intensité
    { value: 220, kind: 5 }, // Vitesse
    { value: 80, kind: 4 }, // Force
    { value: 80, kind: 3 }, // Endurance
    { value: 240, kind: 2 }, // Energie
    { value: 200, kind: 1 }, // Cardio
  ],
};
