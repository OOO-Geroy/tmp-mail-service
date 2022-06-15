import { IconButton, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import ContentCopy from '@mui/icons-material/ContentCopy';

interface MailCopyButtonProps {
  email?: string
  disabled?: boolean
}

export function MailCopy({ email = '', disabled = false }: MailCopyButtonProps) {
  const copy = useCallback(() => navigator.clipboard.writeText(email), [email]);
  return (
    <Tooltip title="Copy mail address">
      <span>
        <IconButton onClick={copy} aria-label="delete" size="large" disabled={disabled}>
          <ContentCopy fontSize="inherit" />
        </IconButton>
      </span>
    </Tooltip>
  );
}
