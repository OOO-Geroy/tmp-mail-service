import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BASENAME } from 'shared';

interface WithRouterProps {
    children: ReactNode
}

export function WithRouter({ children }: WithRouterProps) {
  console.log(BASENAME);
  return (
    <BrowserRouter basename={BASENAME}>
      {children}
    </BrowserRouter>
  );
}
