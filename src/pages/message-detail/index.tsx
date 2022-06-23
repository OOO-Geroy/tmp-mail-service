import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { MailMessageCard, useMailMessagesStore } from 'entities/mail-message';
import { useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { MailMessageCardHeader } from 'entities/mail-message/ui/card-header';
import { useTranslation } from 'react-i18next';

export const MessageDetailPage = observer(() => {
  const { t } = useTranslation();
  const { seq = 1 } = useParams();
  const mailMessagesStore = useMailMessagesStore();
  const message = mailMessagesStore.messages.find((msg) => msg.seq === +seq);

  useEffect(() => {
    if (message && typeof message.text === 'undefined') { mailMessagesStore.loadDetail(+seq); }
  }, [message, seq]);

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 1 }}>
        <Button
          component={Link}
          to="/"
          color="primary"
          aria-label="back"
          startIcon={<ArrowBack />}
        >
          {t('Back to messages')}
        </Button>
      </Box>
      <Box justifyContent="center">
        {message
          ? (
            <MailMessageCard
              header={(
                <MailMessageCardHeader
                  from={message.from}
                  date={message.date}
                  subject={message.subject}
                />
)}
              message={message}
            />
          )
          : (
            <Box
              display="flex"
              justifyContent="center"
            >
              <CircularProgress />
            </Box>
          )}
      </Box>

    </Container>
  );
});
