export interface UserInfo {
  firstName: string;
  lastName: string;
  age: number;
}

export interface KeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

export interface UserData {
  id: number;
  userInfos: UserInfo;
  todayScore?: number;
  score?: number;
  keyData: KeyData;
}

export interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}

export interface UserActivity {
  userId: number;
  sessions: ActivitySession[];
}

export interface AverageSession {
  day: number;
  sessionLength: number;
}

export interface UserAverageSessions {
  userId: number;
  sessions: AverageSession[];
}

export interface PerformanceData {
  value: number;
  kind: number;
}

export interface UserPerformance {
  userId: number;
  kind: Record<number, string>;
  data: PerformanceData[];
}

export const mockUserData: UserData = {
  id: 12,
  userInfos: { firstName: 'Jean', lastName: 'Dupont', age: 34 },
  todayScore: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
};

export const mockUserActivity: UserActivity = {
  userId: 12,
  sessions: [{ day: '2024-01-01', kilogram: 70, calories: 220 }],
};

export const mockUserAverageSessions: UserAverageSessions = {
  userId: 12,

  sessions: [
    { day: 1, sessionLength: 30 },
    { day: 2, sessionLength: 23 },
    { day: 3, sessionLength: 45 },
    { day: 4, sessionLength: 50 },
    { day: 5, sessionLength: 0 },
    { day: 6, sessionLength: 0 },
    { day: 7, sessionLength: 60 },
  ],
};

export const mockUserPerformance: UserPerformance = {
  userId: 12,
  kind: { 1: 'cardio', 2: 'energy', 3: 'endurance' },
  data: [{ value: 80, kind: 1 }],
};
