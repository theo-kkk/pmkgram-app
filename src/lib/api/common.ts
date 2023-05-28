import {ResponseInterface} from '../../interface/api';
import {BaseData} from '../../interface/api/common';
import client from '../axios';

export const common = async () => {
  const data = await client<ResponseInterface<BaseData>>({
    url: '/api/system/base-data',
    method: 'GET',
  });

  return data.result;
};
