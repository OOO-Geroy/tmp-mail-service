import {
  cookieStorage, ErrorResponse, ServerException, AuthException, BaseException,
} from 'shared';

export async function $fetch<T>(...[input, init]: Parameters<typeof fetch>) {
  const res = await fetch(input, {
    ...init,
    headers: {
      ...(init && init.headers ? init.headers : {}),
      authorization: cookieStorage.getItem('authorization') ? `Bearer ${cookieStorage.getItem('authorization')}` : '',
    },
  });

  if (res.status >= 400) {
    const data: ErrorResponse = await res.json();
    if (data.statusCode === 401) throw new AuthException(data.message);
    if (data.statusCode === 500) throw new ServerException(data.message);
    throw new BaseException(data.message, data.statusCode);
  }

  const data: T = await res.json();

  return data;
}
