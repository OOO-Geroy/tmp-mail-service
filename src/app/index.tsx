import React from 'react';
import { Routing } from '../pages';
import { WithAuth } from './providers/with-auth';
import { WithRouter } from './providers/with-router';
import { WithTheme } from './providers/with-theme';

export function App() {
  return (
    <div className="temp-mail">
      <WithTheme>
        <WithRouter>
          <WithAuth>
            <React.StrictMode>
              <Routing />
            </React.StrictMode>
          </WithAuth>
        </WithRouter>
      </WithTheme>
    </div>
  );
}
