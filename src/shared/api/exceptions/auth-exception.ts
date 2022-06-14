import { BaseException } from './base-exception';

export class AuthException extends BaseException {
  constructor(public message = 'Unauthorized', public statusCode = 401) {
    super(message);
  }
}
