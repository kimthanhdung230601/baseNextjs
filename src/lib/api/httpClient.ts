import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import configs from "@/constants/config";

const axiosInstance = axios.create({
  baseURL: configs.API_DOMAIN,
  timeout: 3 * 60 * 1000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await signOut({
        redirect: true,
        callbackUrl: "/login",
      });
    }

    return Promise.reject(error);
  }
);

// export default axiosInstance;

export const sendGet = <T = unknown>(url: string, params?: Record<string, unknown>) =>
  axiosInstance.get<T>(url, { params }).then((res) => res.data);

export const sendPost = <T = unknown>(
  url: string,
  params?: unknown,
  queryParams?: Record<string, unknown>
) =>
  axiosInstance
    .post<T>(url, params, { params: queryParams })
    .then((res) => res.data);

export const sendPut = <T = unknown>(url: string, params?: unknown) =>
  axiosInstance.put<T>(url, params).then((res) => res.data);

export const sendPatch = <T = unknown>(url: string, params?: unknown) =>
  axiosInstance.patch<T>(url, params).then((res) => res.data);

export const sendDelete = <T = unknown>(
  url: string,
  params?: Record<string, unknown>
) => axiosInstance.delete<T>(url, { params }).then((res) => res.data);
