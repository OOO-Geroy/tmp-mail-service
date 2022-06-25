import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'shared';

interface WithThemeProps {
  children: React.ReactNode
}

export function WithTheme({ children }: WithThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
