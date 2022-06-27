import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, themeCache } from 'shared';
import { CacheProvider } from '@emotion/react';

interface WithThemeProps {
  children: React.ReactNode;
}

export function WithTheme({ children }: WithThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={themeCache}>{children}</CacheProvider>
    </ThemeProvider>
  );
}
