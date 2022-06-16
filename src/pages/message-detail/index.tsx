import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { MailMessageCard, useMailMessagesStore } from 'entities/mail-message';
import { useLayoutEffect } from 'react';
import { Button, Container } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { MailMessageCardHeader } from 'entities/mail-message/ui/card-header';

export const MessageDetailPage = observer(() => {
  const { seq = 1 } = useParams();
  const mailMessagesStore = useMailMessagesStore();
  const message = mailMessagesStore.messages.find((msg) => msg.seq === +seq);

  useLayoutEffect(() => {
    if (message && typeof message.text === 'undefined') { mailMessagesStore.loadDetail(+seq); }
  }, [message]);

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
          Back to messages
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
