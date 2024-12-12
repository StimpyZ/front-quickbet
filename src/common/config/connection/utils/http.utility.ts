import {AxiosResponse} from 'axios';

export const validateHttpStatus = (
  httpStatusCode: number,
  response: AxiosResponse,
): {message: string; description: string} => {
  let message: string;
  const description = response.statusText || response.data?.message || '';

  switch (true) {
    case httpStatusCode >= 100 && httpStatusCode < 200:
      message = `Informational ${httpStatusCode}`;
      break;
    case httpStatusCode >= 200 && httpStatusCode < 300:
      message = `Success ${httpStatusCode}`;
      break;
    case httpStatusCode >= 300 && httpStatusCode < 400:
      message = `Redirection ${httpStatusCode}`;
      break;
    case httpStatusCode >= 400 && httpStatusCode < 500:
      message = `Client Error ${httpStatusCode}`;
      break;
    case httpStatusCode >= 500 && httpStatusCode < 600:
      message = `Server Error ${httpStatusCode}`;
      break;
    default:
      message = `Unknown Status Code ${httpStatusCode}`;
  }

  // Manejar el caso de autenticación fallida (401)
  if (httpStatusCode === 401) {
    console.log('Log out user when get 401');
    // logout();
  }

  return {message, description};
};
