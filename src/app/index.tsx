import { useAuth } from 'processes/auth';
import React from 'react';
import { Routing } from '../pages';
import { WithRouter } from './providers/with-router';
import { WithTheme } from './providers/with-theme';

export function App() {
  useAuth();
  return (
    <div className="temp-mail">
      <WithTheme>
        <WithRouter>
          <React.StrictMode>
            <Routing />
          </React.StrictMode>
        </WithRouter>
      </WithTheme>
    </div>
  );
}
