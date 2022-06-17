import { useMailboxStore } from 'entities/mailbox';

export function useIsAuth() {
  const mailboxStore = useMailboxStore();
  return !!mailboxStore.mailbox;
}
