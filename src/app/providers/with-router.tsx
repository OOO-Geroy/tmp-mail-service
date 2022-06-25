import React, { ReactNode } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { BASENAME, ROUTER_TYPE_COMPONENT } from 'shared';

interface WithRouterProps {
    children: ReactNode
}

export function WithRouter({ children }: WithRouterProps) {
  const HistoryConnector = ROUTER_TYPE_COMPONENT === 'browser' ? BrowserRouter : MemoryRouter;
  return (
    <HistoryConnector basename={BASENAME}>
      {children}
    </HistoryConnector>
  );
}
