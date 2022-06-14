import { IconButton } from '@mui/material';
import React, { useCallback } from 'react';
import Replay from '@mui/icons-material/Replay';
import { observer } from 'mobx-react';
import { MailboxStoreState, useMailboxStore } from 'entities/mailbox';

export const RenewButton = observer(() => {
  const maiboxStore = useMailboxStore();
  const renew = useCallback(() => maiboxStore.renew(), [maiboxStore]);
  return (
    <IconButton color="error" onClick={renew} aria-label="renew email" size="large" disabled={maiboxStore.state === MailboxStoreState.PENDING}>
      <Replay fontSize="inherit" />
    </IconButton>
  );
});
