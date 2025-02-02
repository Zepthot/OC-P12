import {
  UserData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from '../mocks/mockData';

export function formatUserData(data: {
  id: number;
  userInfos: { firstName: string; lastName: string; age: number };
  todayScore?: number;
  score?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}): UserData {
  if (!data) throw new Error('Données utilisateur invalides');
  return {
    id: data.id,
    userInfos: data.userInfos,
    todayScore: data.todayScore ?? data.score,
    keyData: data.keyData,
  };
}

export function formatUserActivity(data: {
  userId: number;
  sessions: { day: string; kilogram: number; calories: number }[];
}): UserActivity {
  if (!data) throw new Error("Données d'activité invalides");
  return {
    userId: data.userId,
    sessions: data.sessions.map(
      (session: { day: string; kilogram: number; calories: number }) => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      })
    ),
  };
}

export function formatUserAverageSessions(data: {
  userId: number;
  sessions: { day: string; sessionLength: number }[];
}): UserAverageSessions {
  if (!data) throw new Error('Données de sessions invalides');
  return {
    userId: data.userId,
    sessions: data.sessions.map(
      (session: { day: string; sessionLength: number }) => ({
        day: parseInt(session.day, 10),
        sessionLength: session.sessionLength,
      })
    ),
  };
}

export function formatUserPerformance(data: {
  userId: number;
  kind: { [key: number]: string };
  data: { value: number; kind: number }[];
}): UserPerformance {
  if (!data) throw new Error('Données de performance invalides');
  return {
    userId: data.userId,
    kind: data.kind,
    data: data.data.map((item: { value: number; kind: number }) => ({
      value: item.value,
      kind: item.kind,
    })),
  };
}
