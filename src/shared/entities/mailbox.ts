export class Mailbox {
  email = '';

  exp = '';

  constructor(partial: Mailbox) {
    Object.assign(this, partial);
  }
}
