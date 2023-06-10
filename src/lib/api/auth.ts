import {ResponseInterface} from '../../interface/api';
import {SignUp} from '../../interface/api/auth';
import client from '../axios';

export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ResponseInterface<SignUp>> => {
  try {
    return await client<ResponseInterface<SignUp>>({
      url: '/api/auth/register',
      method: 'POST',
      body: {email, password},
    });
  } catch (e: any) {
    return e.message;
  }
};
