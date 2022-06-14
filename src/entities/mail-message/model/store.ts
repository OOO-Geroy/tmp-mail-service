import { makeAutoObservable, runInAction } from 'mobx';
import { AuthException, loadMailMessages, MailMessage } from 'shared';
import { loadMailMessageDetail } from 'shared/api/requests/load-mail-message-detail';

export enum MailMessageStoreState {
  PENDING = 'pending',
  DONE = 'done',
  ERROR = 'error'
}

export class MailMessagesStore {
  messages: MailMessage[] = [];

  state: MailMessageStoreState = MailMessageStoreState.PENDING;

  error: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   *
   */
  async load() {
    this.state = MailMessageStoreState.PENDING;
    try {
      const rawMessages = await loadMailMessages(this.messages[this.messages.length - 1]?.seq);
      runInAction(() => {
        this.messages.push(...rawMessages.map((rawMessage) => new MailMessage(rawMessage)));
        this.state = MailMessageStoreState.DONE;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.state = MailMessageStoreState.ERROR;
        this.error = <Error>error;
      });
    }
  }

  /**
   *
   * @param seq
   */
  async loadDetail(seq: number) {
    this.state = MailMessageStoreState.PENDING;
    try {
      const rawMessage = await loadMailMessageDetail(seq);
      runInAction(() => {
        const ind = this.messages.findIndex((msg) => seq === msg.seq);
        this.messages[ind] = new MailMessage(rawMessage);
        this.state = MailMessageStoreState.DONE;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        if (error instanceof AuthException) this.clear();
        this.state = MailMessageStoreState.ERROR;
        this.error = <Error>error;
      });
    }
  }

  clear() {
    this.messages = [];
  }
}

export const mailMessagesStore = new MailMessagesStore();
