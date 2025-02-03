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
  day: string;
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
