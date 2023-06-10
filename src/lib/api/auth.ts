import {ResponseInterface} from '../../interface/api';
import {Login, SignUp} from '../../interface/api/auth';
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
    return e;
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ResponseInterface<Login>> => {
  try {
    return await client<ResponseInterface<Login>>({
      url: '/api/auth/login',
      method: 'POST',
      body: {email, password},
    });
  } catch (e: any) {
    return e;
  }
};

export const logout = async () => {
  try {
    return await client({
      url: '/api/auth/logout',
      method: 'GET',
    });
  } catch (e) {
    return e;
  }
};
