/* eslint-disable no-param-reassign */
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
import { scopedClass, stylePrefixer } from '../consts';

export const themeCache = createCache({
  key: stylePrefixer,
  stylisPlugins: [
    // eslint-disable-next-line consistent-return
    (element) => {
      if (element.type === 'rule') {
        if (Array.isArray(element.props) && element.line === 1) {
          element.props = element.props.map((v) => `.${scopedClass}.${scopedClass}.${scopedClass} ${v}`);
        }
      }
    },
  ],
});

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
