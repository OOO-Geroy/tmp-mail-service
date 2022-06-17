import { makeAutoObservable, runInAction } from 'mobx';
import {
  AuthException, loginMailbox, Mailbox, renewMailbox,
} from 'shared';

export enum MailboxStoreState {
  PENDING = 'pending',
  DONE = 'done',
  ERROR = 'error'
}

export class MailboxStore {
  mailbox: Mailbox | null = null;

  state: MailboxStoreState = MailboxStoreState.PENDING;

  error: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async auth() {
    this.clear();
    this.state = MailboxStoreState.PENDING;
    try {
      const data = await loginMailbox();
      const mailbox = new Mailbox(data);
      runInAction(() => {
        this.mailbox = mailbox;
        this.state = MailboxStoreState.DONE;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        if (error instanceof AuthException) this.clear();
        this.errorHandler(error);
      });
    }
  }

  async renew() {
    this.clear();
    this.state = MailboxStoreState.PENDING;
    try {
      const data = await renewMailbox();
      const mailbox = new Mailbox(data);
      runInAction(() => {
        this.mailbox = mailbox;
        this.state = MailboxStoreState.DONE;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.clear();
        this.errorHandler(error);
      });
    }
  }

  errorHandler(error: unknown) {
    this.state = MailboxStoreState.ERROR;
    this.error = <Error>error;
  }

  clear() {
    this.mailbox = null;
  }
}

export const mailboxStore = new MailboxStore();
