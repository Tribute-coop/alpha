import React, { useEffect, useState, FormEvent } from 'react';

import './contributions-new.scss';
import { useTranslation } from 'react-i18next';

import { SelectOptions } from '../../../core/models/select-options.model';
import { toSelectables } from '../../../core/utils/helpers';
import { Domain } from '../assignments/domain.model';
import { Member } from '../../members/member.model';

import {
  domains as mockDomains,
  members as mockMembers
} from '../../mocks';

interface ContributionsNewProps {
  onClose: () => void;
}

export function ContributionsNew({ onClose }: ContributionsNewProps): JSX.Element {
  const { t } = useTranslation();
  const [ users, setUsers ] = useState<SelectOptions[]>([]);
  const [ domains, setDomains ] = useState<SelectOptions[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onClose();
  };

  const handleChange = (): void => {

  };

  useEffect((): void => {
    const selectableMembers = toSelectables<Member>(mockMembers, 'id', 'name');
    const selectableDomains = toSelectables<Domain>(mockDomains, 'name', 'name');

    setDomains(selectableDomains);
    setUsers(selectableMembers);
  }, []);

  return (
    <form className="contribution-new" onSubmit={handleSubmit} autoComplete="off">
      <div className="contribution-new__fields">
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder={t('project.contributions.new.name')}
            className="form-control" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="uppercase-label">
            {t('project.contributions.new.description')}
          </label>
          <textarea id="description" name="description" placeholder={t('project.contributions.new.descriptionPlaceholder')}
            className="form-control" onChange={handleChange} rows={5} />
        </div>

        <div className="form-group">
          <label htmlFor="contributionDomain" className="uppercase-label">
            {t('project.contributions.new.domain')}
          </label>
          <select id="contributionDomain" name="contributionDomain" className="search-select__select form-control"
            onChange={handleChange}>
            { domains.map(({ key, value }: SelectOptions): JSX.Element => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="uppercase-label">{t('project.contributions.new.rewardWhen')}</label>

          <div className="custom-control custom-radio">
            <input type="radio" id="whenAssigned" name="when" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="whenAssigned">
              {t('project.contributions.new.assignedWhen')}
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="whenApproved" name="when" className="custom-control-input" defaultChecked />
            <label className="custom-control-label" htmlFor="whenApproved">
              {t('project.contributions.new.approvedWhen')}
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="uppercase-label">{t('project.contributions.new.rewardAmount')}</label>

          <div className="custom-control custom-radio">
            <input type="radio" id="fixedAmount" name="amount" className="custom-control-input" defaultChecked />
            <label className="custom-control-label" htmlFor="fixedAmount">
              {t('project.contributions.new.fixedAmount')}
            </label>
            <input type="number" id="quantity" name="quantity" className="input-inline form-control" onChange={handleChange}/>
            <span>CTX</span>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="variableBasedAmount" name="amount" className="custom-control-input" disabled />
            <label className="custom-control-label" htmlFor="variableBasedAmount">
              {t('project.contributions.new.variableBasedAmount')}
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="assignTo" className="uppercase-label">
            {t('project.contributions.new.assignTo')}
          </label>
          <select id="assignTo" name="assignTo" className="search-select__select form-control"
            onChange={handleChange}>
            { users.map(({ key, value }: SelectOptions): JSX.Element => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contribution-new__actions border-top">
        <div className="contribution-new__action contribution-new__action--left">
          <button type="button" className="btn btn-link btn-block" onClick={onClose}>
            {t('generic.cancel')}
          </button>
        </div>
        <div className="contribution-new__action contribution-new__action--right">
          <input disabled={false} className="btn btn-primary btn-block" type="submit"
            value={String(t('project.contributions.new.addContribution'))} />
        </div>
      </div>
    </form>
  );
}
