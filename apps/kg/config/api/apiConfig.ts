import axios, { AxiosRequestConfig } from 'axios';
import { getSession, signOut } from 'next-auth/react';

type Session = {
  user?: {
    id: string;
    name: string;
    email: string;
    token: {
      access_token: string;
      refresh_token: string;
    };
  };
};

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL_PRODUCTION,
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  async (config) => {
    const session: Session = (await getSession()) as Session;

    const token = session?.user?.token?.access_token as string;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      signOut({ callbackUrl: '/auth/login' });
    }
    return Promise.reject(error);
  }
);

export { api };