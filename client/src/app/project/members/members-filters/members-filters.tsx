import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { useSearchQuery } from 'app/shared/hooks';
import { SearchInput, SearchSelect } from 'app/shared/components';

export function MembersFilters(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { location: { search }, history } = props;
  const { updateQuery, query } = useSearchQuery(search, history);

  return (
    <div className="row pt-3">
      <div className="col-12 col-xl-4">
        <SearchSelect name="role" onChange={updateQuery} value={query.role}
          label={t('project.members.role')}>
          <option value="">{t('select.all')}</option>
          <option value="0">{t('project.members.filters.owner')}</option>
          <option value="1">{t('project.members.filters.contributor')}</option>
        </SearchSelect>
      </div>
      <div className="col-12 col-xl-3 offset-xl-5">
        <SearchInput name="q" onChange={updateQuery} value={query.q} />
      </div>
    </div>
  );
}
