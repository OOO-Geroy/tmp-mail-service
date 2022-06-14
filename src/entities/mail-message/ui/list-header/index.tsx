import {
  Box,
  Grid, Typography, useTheme,
} from '@mui/material';
import React from 'react';

export function MailMessageListHeader() {
  const theme = useTheme();
  return (
    <Grid
      container
      display="grid"
      gridTemplateColumns="42% 1fr auto"
      spacing={2}
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        width: '100%',
        margin: '0',
        borderRadius: `${theme.spacing(1)}  ${theme.spacing(1)} 0px 0px`,
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      <Box sx={{
        px: 2,
        py: 2,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      }}
      >
        <Typography variant="subtitle2">
          MESSAGES
        </Typography>
      </Box>
      <Box sx={{
        px: 2,
        py: 2,
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }}
      >
        <Typography variant="subtitle2">
          SENDER
        </Typography>
      </Box>
      <Box sx={{
        px: 2,
        py: 2,
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }}
      >
        <Typography variant="subtitle2">
          SUBJECT
        </Typography>
      </Box>
      <Box sx={{
        px: 2,
        py: 2,
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }}
      >
        <Typography variant="subtitle2" textAlign={['right']}>
          VIEW
        </Typography>
      </Box>
    </Grid>

  );
}
