import React, { ReactNode } from 'react';
import { withTranslation } from 'react-i18next';

interface WithTranslateProps {
    children: ReactNode
}

export const WithTranslation = withTranslation()(({ children }: WithTranslateProps) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {children}
  </>
));
