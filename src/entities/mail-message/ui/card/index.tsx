/* eslint-disable react/no-danger */
import { Card, CardContent } from '@mui/material';
import React, { useMemo } from 'react';
import { MailMessage } from 'shared';
import DOMPurify from 'dompurify';
import { MailMessageCardHeader } from '../card-header';

interface MailMessageCardProps {
  message: MailMessage
}

export function MailMessageCard({ message }: MailMessageCardProps) {
  const cleanHtml = useMemo(() => DOMPurify.sanitize(message.html || '', {
    USE_PROFILES: { html: true },
  }), [message, message.html]);

  return (
    <Card>
      <MailMessageCardHeader from={message.from} />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </CardContent>
    </Card>
  );
}
