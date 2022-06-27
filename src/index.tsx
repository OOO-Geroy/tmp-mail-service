import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { mountElSelector, scopedClass } from 'shared';
import { App } from './app';

const rootElement = document.querySelector(mountElSelector);
document.body.classList.add(scopedClass);
const root = createRoot(rootElement!);

root.render(
  <App />,
);
