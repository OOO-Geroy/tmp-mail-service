import { observer } from 'mobx-react';
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuth } from './model';

interface RequireAuthProps {
  children: ReactNode,
  redirectTo: string
}

export const RequireAuth = observer(({ children, redirectTo }: RequireAuthProps) => {
  const isAuthenticated = useIsAuth();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { isAuthenticated ? children : <Navigate to={redirectTo} />}
    </>
  );
});
