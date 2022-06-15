import { Button, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import Replay from '@mui/icons-material/Close';
import { observer } from 'mobx-react';
import { MailboxStoreState, useMailboxStore } from 'entities/mailbox';

export const MailRenew = observer(() => {
  const maiboxStore = useMailboxStore();
  const renew = useCallback(() => maiboxStore.renew(), [maiboxStore]);
  return (
    <Tooltip title="Renew mail address">
      <span>
        <Button
          color="error"
          onClick={renew}
          aria-label="Renew mail address"
          variant="text"
          disabled={maiboxStore.state === MailboxStoreState.PENDING}
          startIcon={<Replay fontSize="inherit" />}
        >
          renew
        </Button>
      </span>

    </Tooltip>
  );
});
