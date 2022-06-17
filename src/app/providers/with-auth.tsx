import * as React from 'react';
import { useAuth } from 'processes/auth';

interface WithThemeProps {
  children: React.ReactNode
}

export const WithAuth = React.memo(({ children }: WithThemeProps) => {
  useAuth();

  return (
    <div>
      {children}
    </div>
  );
});
