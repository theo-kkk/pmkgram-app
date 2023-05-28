import axios, {AxiosRequestConfig} from 'axios';
import {API_URL, IOS_CLIENT_CODE, ANDROID_CLIENT_CODE} from '@env';
import {Platform} from 'react-native';
import {Error} from '../interface/api/index';

const clientType =
  Platform.OS === 'ios' ? IOS_CLIENT_CODE : ANDROID_CLIENT_CODE;

const axiosDefualtHeader: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Client-Type': clientType,
    Accept: 'application/json',
    Authorization: '',
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
}): Promise<T> {
  try {
    const options: AxiosRequestConfig = {
      url,
      method,
      data: body,
      headers,
    };

    const {data} = await instance.request<T>(options);

    return data;
  } catch (e: any) {
    // toast.warning(e.response.data.error_message);
    // console.log(e);
    return e;
  }
}
