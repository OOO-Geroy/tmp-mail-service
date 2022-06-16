import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface WithRouterProps {
    children: ReactNode
}

export function WithRouter({ children }: WithRouterProps) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}
