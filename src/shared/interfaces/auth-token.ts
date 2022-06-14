export interface AuthData {
  email: string;
  /**
   * Mail expiration date (UTC date)
   */
  exp: string;
}

export type AuthDataWithToken = AuthData & {
  /**
   * JWT
   */
   accessToken: string;
}
