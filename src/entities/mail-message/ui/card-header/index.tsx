import { CardHeader, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { MailMessage } from 'shared';

interface MailMessageCardHeaderProps {
  from: MailMessage['from']
}

export function MailMessageCardHeader({ from }: MailMessageCardHeaderProps) {
  return (
    <CardHeader
      avatar={(
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
    )}
      title={from?.value[0].name}
      subheader={from?.value[0].address}
    />
  );
}
