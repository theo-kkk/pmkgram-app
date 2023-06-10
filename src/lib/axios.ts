import axios, {AxiosRequestConfig} from 'axios';
import {API_URL, IOS_CLIENT_CODE, ANDROID_CLIENT_CODE} from '@env';
import {Platform} from 'react-native';
import {Error} from '../interface/api/index';
import _ from 'lodash';
import {getData} from '../modules/Storage';

const clientType =
  Platform.OS === 'ios' ? IOS_CLIENT_CODE : ANDROID_CLIENT_CODE;

const axiosDefualtHeader: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Client-Type': clientType,
    Accept: 'application/json',
    withCredentials: true,
  },
};

const instance = axios.create(axiosDefualtHeader);

export default async function client<T extends Error>({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: {[key: string]: any};
  headers?: {[key: string]: any};
}) {
  try {
    const options: AxiosRequestConfig = {
      url,
      method,
      data: body === undefined ? {} : body,
      headers: headers === undefined ? {} : headers,
    };

    return await instance.request<T>(options);
  } catch (e: any) {
    return e;
  }
}

instance.interceptors.request.use(async request => {
  const accessToken = await getData('accessToken');
  request.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : undefined;
  console.log(3333, Platform.OS, JSON.stringify(request, null, 2)); // <--- this log
  return request;
});

instance.interceptors.response.use(
  (response): Promise<any> => {
    const {result, message} = response.data;
    const resultState = {
      data: result,
      message: message,
      status: true,
    };

    return Promise.resolve(resultState);
  },
  error => {
    const {data} = error.response;

    const errors = {
      message: '처리중 문제가 발생 했습니다.',
      error: {},
      status: false,
    };
    if (_.has(data, 'message')) {
      errors.message = data.message;
    }
    if (_.has(data, 'error')) {
      errors.error = data.error;
    }
    console.log('error');
    return Promise.reject(errors);
  },
);
