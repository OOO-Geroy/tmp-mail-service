import { useMemo } from 'react';
import { mailMessagesStore } from './store';

export const useMailMessagesStore = () => {
  const store = useMemo(() => mailMessagesStore, [mailMessagesStore]);
  return store;
};
