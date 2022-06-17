import { useMailMessagesStore } from 'entities/mail-message';
import { useMailboxStore } from 'entities/mailbox';
import { observe } from 'mobx';
import { useEffect } from 'react';
import { AuthException } from 'shared';

export function useAuth() {
  const mailboxStore = useMailboxStore();
  const mailMessagesStore = useMailMessagesStore();

  useEffect(() => {
    let intervalId: any = null;

    const disposerAuth = observe(mailboxStore, 'mailbox', (change) => {
      if (!change.newValue) {
        mailMessagesStore.clear();
        clearInterval(intervalId);
        return change;
      }

      mailMessagesStore.clear();
      mailMessagesStore.load();

      clearInterval(intervalId);
      intervalId = setInterval(() => {
        mailMessagesStore.load();
      }, 10000);

      return change;
    });

    const disposerReauth = observe(mailMessagesStore, 'error', (change) => {
      if (!(mailMessagesStore.error instanceof AuthException)) return null;

      clearInterval(intervalId);
      mailboxStore.auth();
      mailMessagesStore.clear();
      return change;
    });

    mailboxStore.auth();

    return () => {
      clearInterval(intervalId);
      disposerAuth();
      disposerReauth();
    };
  }, [mailboxStore, mailMessagesStore]);
}
