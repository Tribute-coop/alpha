import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { RouterOutlet, Loader } from 'app/shared/components';
import { useTitleFromPath } from 'app/shared/hooks';
import { Project } from './project.model';
import routes from './project.routes';

import { projects as mockProjects } from '../mocks';

import './project-layout.scss';

export function ProjectLayout({ match: { path }, location: { pathname } }: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const title = useTitleFromPath(pathname);
  const [ project ] = useState<Project>(mockProjects[0]);
  const [ showNewContribution, setShowNewContribution ] = useState<boolean>(false);

  useEffect((): void => {
    setShowNewContribution(pathname.includes('assignments'));
  }, [pathname]);

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="project-layout">
          <img src={project.logo} alt={project.name} />
          <div className="project-layout__name">{project.name}</div>
        </div>

        <h4 className="main-layout__title">{t(title)}</h4>

        { showNewContribution &&
          <Link className="btn btn-primary" to={path + '/contributions/assignments/new'}>
            {t('project.contributions.newContribution')}
          </Link>
        }
      </header>
      <section className="main-layout__section">
        <Suspense fallback={<Loader />}>
          <RouterOutlet path={path} routes={routes} />
        </Suspense>
      </section>
    </div>
  );
}