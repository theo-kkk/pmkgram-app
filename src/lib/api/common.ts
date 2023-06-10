import {ResponseInterface} from '../../interface/api';
import {BaseData} from '../../interface/api/common';
import client from '../axios';

export const common = async () => {
  try {
    const data = await client<ResponseInterface<BaseData>>({
      url: '/api/system/base-data',
      method: 'GET',
    });

    return data.result;
  } catch (e: any) {
    return e.message;
  }
};

export const serverCheck = async () => {
  try {
    const data = await client<ResponseInterface<BaseData>>({
      url: '/api/system/check-status',
      method: 'GET',
    });

    return data.result;
  } catch (e: any) {
    return e.message;
  }
};
