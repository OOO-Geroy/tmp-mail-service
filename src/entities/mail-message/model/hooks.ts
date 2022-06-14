import { useState } from 'react';
import { mailMessagesStore } from './store';

export const useMailMessagesStore = () => {
  const [store] = useState(() => mailMessagesStore);
  return store;
};
