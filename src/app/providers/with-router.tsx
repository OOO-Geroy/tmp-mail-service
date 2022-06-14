import { CircularProgress } from '@mui/material';
import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface WithRouterProps {
    children: ReactNode
}

export function WithRouter({ children }: WithRouterProps) {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        {children}
      </Suspense>
    </BrowserRouter>
  );
}
