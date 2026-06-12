import Axios from "axios";
import Cookies from "js-cookie";
import configs from "@/constants/config";

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const logout = () => {
  Cookies.remove("token");
  Cookies.remove("refreshToken");
  window.location.href = "/";
};
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: any) => {
    const originalConfig = error.config;
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      logout();
      return Promise.reject(error);
    }
    return Axios.post(`${configs.API_DOMAIN}/idol/auth/request-access-token`, {
      refreshToken,
    })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.data;
          Cookies.set("token", data.accessToken);
          originalConfig.headers.Authorization = `Bearer ${data.accessToken}`;
          return Axios(originalConfig);
        } else {
          logout();
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      });
  }
);

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
