import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { mountElSelector } from 'shared';
import { App } from './app';

const rootElement = document.querySelector(mountElSelector);
const root = createRoot(rootElement!);

root.render(
  <App />,
);
