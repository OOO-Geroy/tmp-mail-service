import { Button, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import Replay from '@mui/icons-material/Replay';
import { MailMessageStoreState, useMailMessagesStore } from 'entities/mail-message';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

export const UpdateMessageList = observer(() => {
  const messagesStore = useMailMessagesStore();
  const update = useCallback(() => messagesStore.load(), [messagesStore]);
  const { t } = useTranslation();

  return (
    <Tooltip title={t('Update message list')}>
      <span>
        <Button
          color="success"
          onClick={update}
          aria-label={t('Update message list')}
          variant="text"
          disabled={messagesStore.state === MailMessageStoreState.PENDING}
          startIcon={<Replay fontSize="inherit" />}
        >
          {t('update')}
        </Button>
      </span>
    </Tooltip>
  );
});
