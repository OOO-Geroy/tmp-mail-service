import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import { MailMessageCard, useMailMessagesStore } from 'entities/mail-message';
import { useLayoutEffect } from 'react';
import { Container, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export const MessageDetailPage = observer(() => {
  const { seq = 1 } = useParams();
  const mailMessagesStore = useMailMessagesStore();
  const message = mailMessagesStore.messages.find((msg) => msg.seq === +seq);

  useLayoutEffect(() => {
    if (message && typeof message.text === 'undefined') { mailMessagesStore.loadDetail(+seq); }
  }, [message]);

  return (
    <Container maxWidth="md">
      <Link to="/">
        <IconButton color="primary" aria-label="back" component="span">
          <ArrowBack />
        </IconButton>
      </Link>
      <Box sx={{ my: 3 }}>
        {message ? <MailMessageCard message={message} /> : <CircularProgress />}
      </Box>

    </Container>
  );
});
