import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { SelectableFilters } from '../../../../core/models/selectable-filters.model';
import { toSelectables } from '../../../../core/utils/helpers';
import { useSearchQuery } from '../../../../shared/hooks';
import { SearchSelect, SearchInput } from '../../../../shared';
import { Member } from '../../../members/member.model';
import { Domain } from '../domain.model';
import { getAssignmentStatus, AssignmentState } from '../assignment-status.enum';

import {
  domains as mockDomains,
  members as mockMembers
} from '../../../mocks';

export function AssignmentsFilters(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { location: { search }, history } = props;
  const { updateQuery, query } = useSearchQuery(search, history);
  const [ filters, setFilters ] = useState<SelectableFilters>({ who: [], status: [], domain: [] });

  useEffect((): void => {
    const status = getAssignmentStatus();
    const selectableMembers = toSelectables<Member>(mockMembers, 'id', 'name');
    const selectableDomains = toSelectables<Domain>(mockDomains, 'name', 'name');
    const selectableStatus = toSelectables<AssignmentState>(status, 'id', 'name', true);

    setFilters({
      who: selectableMembers,
      status: selectableStatus,
      domain: selectableDomains
    });
  }, []);

  return (
    <div className="row pt-3">
      { Object.keys(filters).map((filterName: string): JSX.Element => (
        <div className="col-12 col-lg-3" key={filterName}>
          <SearchSelect name={filterName} onChange={updateQuery} value={query[filterName]}
            label={t(`project.contributions.assignment.${filterName}`)}>
            <option value="">{t('select.all')}</option>
            { filters[filterName].map(({ key, value, requireI18n }): JSX.Element =>
              <option value={key} key={key}>{ requireI18n ? t(value) : value}</option>
            )}
          </SearchSelect>
        </div>
      ))}

      <div className="col-12 col-lg-3">
        <SearchInput name="q" onChange={updateQuery} value={query.q} />
      </div>
    </div>
  );
}