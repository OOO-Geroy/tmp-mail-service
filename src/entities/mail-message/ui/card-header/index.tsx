import {
  Box, Divider, Grid, Typography, useTheme,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { InitialsAvatar, MailMessage } from 'shared';

interface MailMessageCardHeaderProps {
  from: MailMessage['from'],
  date?: string | Date,
  subject?: string
}

export function MailMessageCardHeader({ from, date, subject }: MailMessageCardHeaderProps) {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const formattedDate = useMemo(() => new Intl.DateTimeFormat(i18n.language, {
    dateStyle: 'medium',
    timeStyle: 'long',
  }).format(new Date(date || new Date())), [date]);

  return (
    <Box sx={{
      p: 2,
      pb: 1.5,
    }}
    >
      <Grid
        container
        display="grid"
        gridTemplateColumns="1fr auto"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={4}
        sx={{
          [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        <Grid
          container
          item
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
          >
            <InitialsAvatar value={from?.value[0].name || ''} />
          </Grid>
          <Grid
            item
          >
            <Typography variant="body2" component="p" noWrap>
              {from?.value[0].name}
            </Typography>
            <Typography variant="caption" component="p" noWrap sx={{ color: 'grey.700' }}>
              {from?.value[0].address}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
        >
          <Typography variant="caption" component="p" noWrap sx={{ color: 'grey.700' }}>
            {formattedDate}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{
        my: 1.5,
        mt: 2,
      }}
      />
      <Box display="flex" sx={{ columnGap: 1.5 }}>
        <Typography variant="subtitle2" component="p" textTransform="capitalize">
          {t('subject')}
          :
        </Typography>
        <Typography variant="body2" component="p">
          {subject}
        </Typography>
      </Box>
    </Box>

  );
}
