import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {validateHttpStatus} from './utils/http.utility';

interface HttpParams {
  endpoint: string;
  body?: unknown;
  config?: AxiosRequestConfig;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
  withCredentials: false,
});

const get = async <T>({endpoint, config}: HttpParams) =>
  apiClient
    .get<T>(endpoint, config)
    .then(response => response.data)
    .catch((error: AxiosError) => {
      validateHttpStatus(
        error.response?.status || 500,
        error.response as AxiosResponse
      );
      throw error;
    });

const post = async <T>({endpoint, body, config}: HttpParams) =>
  apiClient
    .post<T>(endpoint, body, config)
    .then(response => response.data)
    .catch((error: AxiosError) => {
      validateHttpStatus(
        error.response?.status || 500,
        error.response as AxiosResponse,
      );
      throw error;
    });

const put = async <T>({endpoint, body, config}: HttpParams) =>
  apiClient
    .put<T>(endpoint, body, config)
    .then(response => response.data)
    .catch((error: AxiosError) => {
      validateHttpStatus(
        error.response?.status || 500,
        error.response as AxiosResponse,
      );
      throw error;
    });

const patch = async <T>({endpoint, body, config}: HttpParams) =>
  apiClient
    .patch<T>(endpoint, body, config)
    .then(response => response.data)
    .catch((error: AxiosError) => {
      validateHttpStatus(
        error.response?.status || 500,
        error.response as AxiosResponse,
      );
      throw error;
    });

const _delete = async <T>({endpoint, config}: HttpParams) =>
  apiClient
    .delete<T>(endpoint, config)
    .then(response => response.data)
    .catch((error: AxiosError) => {
      validateHttpStatus(
        error.response?.status || 500,
        error.response as AxiosResponse,
      );
      throw error;
    });

export const http = {
  get,
  post,
  put,
  patch,
  _delete,
};
