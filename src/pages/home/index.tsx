import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  CircularProgress,
  Grid, TextField, useTheme,
} from '@mui/material';
import { MailCopy } from 'features/mail-copy';
import { observer } from 'mobx-react';
import { MailboxStoreState, useMailboxStore } from 'entities/mailbox';
import { Outlet } from 'react-router-dom';
import { LifeTimer } from 'features/life-timer';

export const HomePage = observer(() => {
  const theme = useTheme();
  const mailboxStore = useMailboxStore();

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ mb: 5 }}>
          <Grid
            container
            gridTemplateColumns="1fr auto"
            spacing={1}
          >
            <Grid item xs>
              <Box>
                <Box sx={{
                  position: 'relative',
                }}
                >
                  <TextField
                    fullWidth
                    hiddenLabel
                    variant="filled"
                    value={mailboxStore.mailbox ? mailboxStore.mailbox.email : ''}
                  />
                  {mailboxStore.state === MailboxStoreState.PENDING && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: theme.palette.grey[600],
                      position: 'absolute',
                      top: '50%',
                      right: theme.spacing(2),
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                  )}
                </Box>
                <Box sx={{ mt: 0.5 }}>
                  <LifeTimer exp={mailboxStore.mailbox?.exp} />
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <MailCopy
                email={mailboxStore.mailbox?.email}
                disabled={mailboxStore.state === MailboxStoreState.PENDING}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Outlet />
    </>

  );
});
