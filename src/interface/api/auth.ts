export interface SignUp {
  authcode?: string;
  authlink?: string;
  email: string;
  nickname: string;
}

export interface Login {
  access_token: string;
  refresh_token: string;
}
