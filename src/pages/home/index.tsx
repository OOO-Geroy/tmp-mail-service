import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';
import { MailCopyButton } from 'features/mail-copy';
import { MailRenewButton } from 'features/mail-renew';
import { observer } from 'mobx-react';
import { MailboxStoreState, useMailboxStore } from 'entities/mailbox';
import { Outlet } from 'react-router-dom';
import { LifeTimer } from 'features/life-timer';

export const HomePage = observer(() => {
  const mailboxStore = useMailboxStore();

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h1" textAlign={['center']} gutterBottom>
            Temporary Mail Service
          </Typography>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box>
                <TextField
                  fullWidth
                  hiddenLabel
                  variant="filled"
                  value={mailboxStore.mailbox ? mailboxStore.mailbox.email : ''}
                />
                <Box sx={{ mt: 0.5 }}>
                  <LifeTimer exp={mailboxStore.mailbox?.exp} />
                </Box>
              </Box>

            </Grid>
            <Grid item>
              <MailCopyButton
                email={mailboxStore.mailbox?.email}
                pending={mailboxStore.state === MailboxStoreState.PENDING}
              />
            </Grid>
            <Grid item>
              <MailRenewButton />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Outlet />
    </>

  );
});
