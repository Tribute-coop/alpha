import React from 'react';
import { useTranslation } from 'react-i18next';

export function CustodySetupComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('setup.custody.title')}
      </h3>
      <p className="lead">
        {t('setup.custody.description')}
      </p>
      <p className="lead">
        <a href="#">
          {t('setup.custody.help')}
        </a>
      </p>
    </div>
  );
}