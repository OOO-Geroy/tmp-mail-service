import { BaseException } from './base-exception';

export class ServerException extends BaseException {
  constructor(public message = 'Server error', public statusCode = 500) {
    super(message);
  }
}
