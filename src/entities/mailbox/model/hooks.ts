import { useState } from 'react';
import { mailboxStore } from './store';

export const useMailboxStore = () => {
  const [store] = useState(() => mailboxStore);
  return store;
};
