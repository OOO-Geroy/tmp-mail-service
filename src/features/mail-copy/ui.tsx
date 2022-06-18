import { IconButton, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';

interface MailCopyButtonProps {
  email?: string
  disabled?: boolean
}

export function MailCopy({ email = '', disabled = false }: MailCopyButtonProps) {
  const copy = useCallback(() => navigator.clipboard.writeText(email), [email]);
  const { t } = useTranslation();

  return (
    <Tooltip title={t('Copy mail address')}>
      <span>
        <IconButton onClick={copy} aria-label={t('Copy mail address')} size="large" disabled={disabled}>
          <ContentCopy fontSize="inherit" />
        </IconButton>
      </span>
    </Tooltip>
  );
}
