import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootElement = document.getElementById('mail-tmp-root');
const root = createRoot(rootElement!);

root.render(
  <App />,
);
