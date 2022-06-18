import { Button, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import Replay from '@mui/icons-material/Close';
import { observer } from 'mobx-react';
import { MailboxStoreState, useMailboxStore } from 'entities/mailbox';
import { useTranslation } from 'react-i18next';

export const MailRenew = observer(() => {
  const maiboxStore = useMailboxStore();
  const renew = useCallback(() => maiboxStore.renew(), [maiboxStore]);
  const { t } = useTranslation();

  return (
    <Tooltip title={t('Renew mail address')}>
      <span>
        <Button
          color="error"
          onClick={renew}
          aria-label={t('Renew mail address')}
          variant="text"
          disabled={maiboxStore.state === MailboxStoreState.PENDING}
          startIcon={<Replay fontSize="inherit" />}
        >
          {t('renew')}
        </Button>
      </span>

    </Tooltip>
  );
});
