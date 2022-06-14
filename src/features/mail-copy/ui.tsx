import { IconButton } from '@mui/material';
import React, { useCallback } from 'react';
import ContentCopy from '@mui/icons-material/ContentCopy';

interface MailCopyButtonProps {
  email?: string
  pending?: boolean
}

export function MailCopyButton({ email = '', pending = false }: MailCopyButtonProps) {
  const copy = useCallback(() => navigator.clipboard.writeText(email), [email]);
  return (
    <IconButton onClick={copy} aria-label="delete" size="large" disabled={pending}>
      <ContentCopy fontSize="inherit" />
    </IconButton>
  );
}
