import axios from 'axios';
import {
  UserData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from '../mocks/mockData';
import {
  formatUserData,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
} from '@/utils/formatData';

const API_URL = 'http://localhost:3000/user';
const USE_MOCK = false; // Mettre à false pour activer l’API réelle

async function fetchData<T>(
  url: string,
  mockData: T,
  formatter: (data: T) => T
): Promise<T> {
  try {
    const data = USE_MOCK
      ? mockData
      : (await axios.get<{ data: T }>(url)).data.data;
    return formatter(data);
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des données depuis ${url}:`,
      error
    );
    throw new Error('Impossible de récupérer les données.');
  }
}

export function fetchUserData(userId: number): Promise<UserData> {
  return fetchData(`${API_URL}/${userId}`, mockUserData, formatUserData);
}

export function fetchUserActivity(userId: number): Promise<UserActivity> {
  return fetchData(
    `${API_URL}/${userId}/activity`,
    mockUserActivity,
    formatUserActivity
  );
}

export function fetchUserAverageSessions(
  userId: number
): Promise<UserAverageSessions> {
  return fetchData(
    `${API_URL}/${userId}/average-sessions`,
    mockUserAverageSessions,
    formatUserAverageSessions
  );
}

export function fetchUserPerformance(userId: number): Promise<UserPerformance> {
  return fetchData(
    `${API_URL}/${userId}/performance`,
    mockUserPerformance,
    formatUserPerformance
  );
}
