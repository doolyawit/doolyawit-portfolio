import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { throwError } from 'rxjs';

class BaseAxios {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.response.use(
      (response) => response,

      (err) => {
        if (err.response.status === 401) {
          console.log('error code 401');
        }
        return throwError(() => new Error(err?.response?.data?.message ?? ''));
      },
    );

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return throwError(() => new Error(err?.response?.data?.message ?? ''));
      },
    );
  }

  getInstance() {
    return this.instance;
  }
}

export default BaseAxios;
