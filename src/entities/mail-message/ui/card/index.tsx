/* eslint-disable react/no-danger */
import { CardContent, Divider, Paper } from '@mui/material';
import React, { ReactNode, useMemo } from 'react';
import { MailMessage } from 'shared';
import DOMPurify from 'dompurify';

interface MailMessageCardProps {
  message: MailMessage,
  header?: ReactNode
}

export function MailMessageCard({ message, header }: MailMessageCardProps) {
  const cleanHtml = useMemo(() => DOMPurify.sanitize(message.html || '', {
    USE_PROFILES: { html: true },
  }), [message, message.html]);

  return (
    <Paper elevation={2}>
      {header}
      <Divider />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </CardContent>
    </Paper>
  );
}
