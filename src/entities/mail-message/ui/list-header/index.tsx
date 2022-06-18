import {
  Box,
  Grid, Typography, useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function MailMessageListHeader() {
  const theme = useTheme();
  const { t } = useTranslation();

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
        <Typography variant="subtitle2" textTransform="uppercase">
          {t('messages')}
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
        <Typography variant="subtitle2" textTransform="uppercase">
          {t('sender')}
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
        <Typography variant="subtitle2" textTransform="uppercase">
          {t('subject')}
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
        <Typography variant="subtitle2" textAlign={['right']} textTransform="uppercase">
          {t('view')}
        </Typography>
      </Box>
    </Grid>

  );
}
