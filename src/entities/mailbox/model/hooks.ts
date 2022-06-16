import { useMemo } from 'react';
import { mailboxStore } from './store';

export const useMailboxStore = () => {
  const store = useMemo(() => mailboxStore, [mailboxStore]);
  return store;
};
