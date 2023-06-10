export interface Error {
  error_message?: string;
}

export interface ResponseInterface<T> extends Error {
  message: string;
  data?: T;
  status: boolean;
  error?: any;
}
