import * as React from 'react';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react';
import {
  MailMessageListRow,
  MailMessageList,
  MailMessageListHeader,
  MailMessageStoreState,
  useMailMessagesStore,
} from 'entities/mail-message';
import {
  CircularProgress, Container, Divider, Grid, Typography,
} from '@mui/material';

export const MessageListPage = observer(() => {
  const messagesStore = useMailMessagesStore();
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 6 }}>
        <MailMessageList
          header={<MailMessageListHeader />}
          pending={messagesStore.state === MailMessageStoreState.PENDING}
        >
          {
          messagesStore.messages.length
            ? messagesStore.messages.map((msg) => (
              <React.Fragment key={msg.seq}>
                <MailMessageListRow
                  seq={msg.seq}
                  sender={msg.from?.value[0]}
                  subject={msg.subject}
                />
                <Divider />
              </React.Fragment>
            ))
            : (
              <Grid
                flexDirection="column"
                container
                rowGap={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: '100%',
                  height: '100%',
                  mt: -2,
                }}
              >
                <Grid item>
                  <CircularProgress />
                </Grid>
                <Grid item>
                  <Typography variant="h5" sx={{ color: 'grey.700' }}>
                    Your mailbox is empty
                  </Typography>
                </Grid>

              </Grid>
            )
}
        </MailMessageList>
      </Box>
    </Container>
  );
});
