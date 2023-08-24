import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface ErrorResponse {
  message?: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  url?: string;
}

const fetcher = Axios.create({
  headers: {},
});

fetcher.interceptors.request.use((config: CustomAxiosRequestConfig) => {
  if (!import.meta.env.DEV) {
    config.baseURL = import.meta.env.VITE_APP_BASE_URL;
    config.url = config.url?.replace('/api', ''); // Use optional chaining
  }
  return config;
});

fetcher.interceptors.response.use(
  (resp: AxiosResponse) => {
    if (resp.status >= 200 && resp.status <= 300) {
      return resp.data;
    }
    const error: ErrorResponse = {
      message: resp.data?.message || 'Server failed.',
    };
    return Promise.reject(error);
  },
  (err) => {
    const error: ErrorResponse = {
      ...err,
      message: err?.response?.data?.message || err?.message || 'Server error',
    };
    throw error;
  }
);

export default fetcher;
