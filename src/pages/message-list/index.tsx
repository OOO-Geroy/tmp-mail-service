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
  CircularProgress, Container, Divider, Grid, Stack, Typography, useTheme,
} from '@mui/material';
import { MailRenew } from 'features/mail-renew';
import { UpdateMessageList } from 'features/update-message-list';
import { useTranslation } from 'react-i18next';
import { MailboxStoreState, useMailboxStore } from 'entities/mailbox';

export const MessageListPage = observer(() => {
  const { t } = useTranslation();
  const theme = useTheme();
  const messagesStore = useMailMessagesStore();
  const mailboxStore = useMailboxStore();

  return (
    <Container maxWidth="sm">
      <Box sx={{ mb: 1 }}>
        <Stack justifyContent="end" spacing={2} direction="row">
          <MailRenew />
          <UpdateMessageList />
        </Stack>
      </Box>
      <Box>
        <MailMessageList
          header={<MailMessageListHeader />}
          pending={messagesStore.state === MailMessageStoreState.PENDING}
        >
          {
          messagesStore.messages.length
            ? messagesStore.reverseMessages.map((msg) => (
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
                  <CircularProgress sx={{
                    color: mailboxStore.state === MailboxStoreState.PENDING
                      ? theme.palette.grey[600]
                      : theme.palette.primary.main,
                  }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" sx={{ color: 'grey.700' }}>
                    {mailboxStore.state === MailboxStoreState.PENDING
                      ? t('Creating a mailbox...')
                      : t('Your mailbox is empty')}
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
