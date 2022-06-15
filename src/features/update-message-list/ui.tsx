import { Button, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import Replay from '@mui/icons-material/Replay';
import { MailMessageStoreState, useMailMessagesStore } from 'entities/mail-message';
import { observer } from 'mobx-react';

export const UpdateMessageList = observer(() => {
  const messagesStore = useMailMessagesStore();
  const update = useCallback(() => messagesStore.load(), [messagesStore]);
  return (
    <Tooltip title="Update message list">
      <span>
        <Button
          color="success"
          onClick={update}
          aria-label="Update message list"
          variant="text"
          disabled={messagesStore.state === MailMessageStoreState.PENDING}
          startIcon={<Replay fontSize="inherit" />}
        >
          update
        </Button>
      </span>
    </Tooltip>
  );
});
