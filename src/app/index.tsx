import React from 'react';
import { Routing } from '../pages';
import { WithAuth } from './providers/with-auth';
import { WithRouter } from './providers/with-router';
import { WithTheme } from './providers/with-theme';
import { WithTranslation } from './providers/with-translate';

export function App() {
  return (
    <div className="temp-mail">
      <WithTheme>
        <WithRouter>
          <WithAuth>
            <WithTranslation>
              <React.StrictMode>
                <Routing />
              </React.StrictMode>
            </WithTranslation>
          </WithAuth>
        </WithRouter>
      </WithTheme>
    </div>
  );
}
