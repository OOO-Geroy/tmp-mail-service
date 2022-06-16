import {
  API_BASE, $fetch, AuthData, AuthDataWithToken, AuthException,
} from 'shared';
import { cookieStorage } from '../../lib/browser';

async function createMailbox(): Promise<AuthData> {
  cookieStorage.removeItem('authorization');
  const data = await $fetch<AuthDataWithToken>(`${API_BASE}auth/tmp/login`);
  cookieStorage.setItem('authorization', data.accessToken, new Date(data.exp));
  return {
    email: data.email,
    exp: data.exp,
  };
}

async function getCurrentMailbox(): Promise<AuthData> {
  const data = await $fetch<AuthData>(`${API_BASE}auth/tmp/mail`);

  return data;
}

async function recreateMailbox(): Promise<AuthData> {
  const data = await $fetch<AuthDataWithToken>(`${API_BASE}auth/tmp/renew`);
  cookieStorage.setItem('authorization', data.accessToken, new Date(data.exp));
  return {
    email: data.email,
    exp: data.exp,
  };
}

export async function renewMailbox(): Promise<AuthData> {
  const token = cookieStorage.getItem('authorization');
  if (token) {
    try {
      const data = await recreateMailbox();
      return data;
    } catch (error) {
      cookieStorage.removeItem('authorization');
      if (error instanceof AuthException) {
        const data = await createMailbox();
        return data;
      }
      throw error;
    }
  }

  const data = await createMailbox();
  return data;
}

export async function loginMailbox(): Promise<AuthData> {
  const token = cookieStorage.getItem('authorization');
  if (token) {
    try {
      const data = await getCurrentMailbox();
      return data;
    } catch (error) {
      if (error instanceof AuthException) {
        const data = await createMailbox();
        return data;
      }
      throw error;
    }
  }

  const data = await createMailbox();
  return data;
}
