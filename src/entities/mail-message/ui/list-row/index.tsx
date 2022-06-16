import { KeyboardArrowRight } from '@mui/icons-material';
import {
  ListItem, Grid, Typography, IconButton, Box, useTheme,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MailMessageAddress } from 'shared';

export interface MailMessageRowProps {
  seq: number,
  sender?: MailMessageAddress,
  subject?: string
}

export function MailMessageListRow({ seq, sender, subject = '' }: MailMessageRowProps) {
  const theme = useTheme();

  return (
    <ListItem sx={{
      px: 0,
      width: '100%',
      margin: '0',
    }}
    >
      <Grid
        container
        display="grid"
        gridTemplateColumns="42% 1fr auto"
        spacing={2}
        sx={{
          width: '100%',
          margin: '0',
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr auto',
          },
        }}
      >
        <Box sx={{
          px: 2,
          py: 1,
          [theme.breakpoints.down('sm')]: {
            pb: 0.5,
          },
        }}
        >
          <Typography variant="body2" component="p" noWrap sx={{ mb: 0.25 }}>
            {sender ? sender.name : ''}
          </Typography>
          <Typography variant="caption" component="p" noWrap sx={{ color: 'grey.700' }}>
            {sender ? sender.address : ''}
          </Typography>
        </Box>
        <Box sx={{
          px: 2,
          py: 1,
          [theme.breakpoints.down('sm')]: {
            gridColumn: '1 / 2',
            pt: 0,
          },

        }}
        >
          <Typography variant="body2" component="p">
            {subject}
          </Typography>
        </Box>
        <Box sx={{
          px: 2,
          py: 1,
          [theme.breakpoints.down('sm')]: {
            gridColumn: '2 / 3',
            gridRow: '1 / -1',
          },
        }}
        >
          <Typography textAlign={['right']}>
            <Link to={`/${seq}`}>
              <IconButton aria-label="fingerprint" color="primary" size="small">
                <KeyboardArrowRight fontSize="small" />
              </IconButton>
            </Link>
          </Typography>
        </Box>
      </Grid>
    </ListItem>
  );
}
