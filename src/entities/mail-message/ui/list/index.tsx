import {
  LinearProgress, List, Paper,
} from '@mui/material';
import React from 'react';

interface MailMessageCardProps {
  children: React.ReactNode,
  pending?: boolean,
  header?: React.ReactNode,
}

export function MailMessageList({ children, pending = false, header }: MailMessageCardProps) {
  return (
    <Paper elevation={2}>
      {header}
      <LinearProgress sx={{ color: pending ? 'grey.600' : 'transparent' }} color="inherit" />
      <List
        aria-label="mailbox messages"
        sx={{
          height: '400px',
          overflow: 'auto',
          py: 0,
        }}
      >
        {children}
      </List>
    </Paper>
  );
}
