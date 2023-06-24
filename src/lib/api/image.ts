import {ResponseInterface} from '../../interface/api';
import {ImageUpload} from '../../interface/api/image';
import client from '../axios';

export const upload = async (
  formData: any,
): Promise<ResponseInterface<ImageUpload>> => {
  try {
    return await client<ResponseInterface<ImageUpload>>({
      url: '/api/media/image-create',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      body: formData,
    });
  } catch (e: any) {
    return e.message;
  }
};
