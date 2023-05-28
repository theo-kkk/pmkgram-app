export interface Error {
  error_message?: string;
}

export interface ResponseInterface<T> extends Error {
  message: string;
  result: T;
}
