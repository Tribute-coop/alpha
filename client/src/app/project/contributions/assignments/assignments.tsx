import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters, contains } from 'app/shared/utils/filters';
import { getParentRoute } from 'app/shared/utils/helpers';
import { State } from 'app/shared/models/state.model';
import { SlidePanel } from 'app/shared/components';
import { Assignment } from './assignment.model';
import { AssignmentsList } from './assignments-list';
import { AssignmentsFilters } from './assignments-filters';
import { AssignmentsDetail } from './assignments-detail';
import { AssignmentsEmpty } from './assignments-empty';
import { AssignmentsEdit } from './assignments-edit';

import './assignments.scss';

import { assignments as mockAssignments } from 'app/mocks';

const filters: QueryFilters<Assignment> = {
  q: (assignment: Assignment, q: string): boolean =>
    contains(assignment.title, q)
  ,
  domain: (assignment: Assignment, domain: string): boolean =>
    assignment.domain === domain
  ,
  status: (assignment: Assignment, status: string): boolean =>
    assignment.status === +status
  ,
  who: (assignment: Assignment, userId: string): boolean =>
    assignment.assignedTo.some((assigned): boolean => assigned.id === userId)
};

export function Assignments(props: RouteComponentProps): JSX.Element {
  const [assignmentsState, setAssignmentsState] = useState<State<Assignment>>({
    loaded: false,
    data: []
  });

  const { history, location, match: { path } } = props;

  useEffect((): void => {
    setAssignmentsState({
      loaded: true,
      data: mockAssignments
    });
  }, []);

  useEffect((): void => {
    if (!assignmentsState.loaded) {
      return;
    }

    const parsedSearch = queryString.parse(location.search);
    const filteredAssignments = applyQueryFilters<Assignment>(
      mockAssignments,
      parsedSearch,
      filters
    );

    setAssignmentsState((prevAssignmentsState): State<Assignment> => {
      return {
        ...prevAssignmentsState,
        data: filteredAssignments
      };
    });

  }, [assignmentsState.loaded, location.search]);

  const handleClose = useCallback((): void => {
    const parentRoute = getParentRoute(location);
    history.push(parentRoute);
  }, [history, location]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        { assignmentsState.loaded && (
          <div className="row">
            { assignmentsState.data.length === 0 ?
              (<div className="col-12">
                <AssignmentsEmpty />
              </div>) :
              (<div className="col-12 col-lg-9">
                <AssignmentsFilters {...props } />
                <AssignmentsList assignments={assignmentsState.data} />
              </div>)
            }
          </div>
        )}
      </div>

      <Switch>
        <Route exact path={`${path}/new`} render={(routeProps): JSX.Element =>
          <SlidePanel onExit={handleClose} render={(close: () => void): JSX.Element =>
            <AssignmentsDetail onClose={close} routeProps={routeProps} />
          } />
        } />

        <Route exact path={`${path}/:id`} render={(routeProps): JSX.Element =>
          <SlidePanel onExit={handleClose} render={(close: () => void): JSX.Element =>
            <AssignmentsEdit onClose={close} routeProps={routeProps}/>
          } />
        } />
      </Switch>
    </React.Fragment>
  );
}