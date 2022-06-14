export class BaseException extends Error {
  constructor(public message = '', public statusCode = 200) {
    super(message);
  }
}
