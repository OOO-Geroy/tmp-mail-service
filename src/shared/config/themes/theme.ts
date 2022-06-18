import { createTheme } from '@mui/material/styles';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#428bca',
    },
    secondary: {
      main: '#11cc8f',
    },
    error: {
      main: '#ff4823',
    },
    warning: {
      main: '#f68000',
    },
  },
});
