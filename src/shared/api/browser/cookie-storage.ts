import Cookies from 'js-cookie';

interface CookieStorageSchema {
  authorization: string
}

class CookieStorage {
  strorage = Cookies;

  getItem(key: keyof CookieStorageSchema) {
    return this.strorage.get(key);
  }

  setItem(key: keyof CookieStorageSchema, value: string, expires?: number | Date) {
    return this.strorage.set(key, value, {
      expires,
    });
  }

  removeItem(key: keyof CookieStorageSchema) {
    return this.strorage.remove(key);
  }
}

export const cookieStorage = new CookieStorage();
