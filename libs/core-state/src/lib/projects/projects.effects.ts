import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as projectsActions from './projects.actions';
import { Project, ProjectService } from '@mdv-twelve/core-data';
import { ProjectsPartialState } from './projects.reducer';

@Injectable()
export class ProjectsEffects {
  loadProjects$ = createEffect(() =>
    this.dataPersistence.fetch(projectsActions.loadProjects, {
      run: (
        action: ReturnType<typeof projectsActions.loadProjects>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.all().pipe(
          map((projects: Project[]) => projectsActions.projectsLoaded({ projects }))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.loadProjects>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addProject$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(projectsActions.createProject, {
      run: (
        action: ReturnType<typeof projectsActions.createProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.create(action.project).pipe(
          map((project: Project) => projectsActions.projectCreated({ project })),
          tap(() => this.notify.notification('Added A Project'))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.createProject>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateProject$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(projectsActions.updateProject, {
      run: (
        action: ReturnType<typeof projectsActions.updateProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.update(action.project).pipe(
          map((project: Project) => projectsActions.projectUpdated({ project })),
          tap(() => this.notify.notification('Updated A Project'))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.updateProject>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteProject$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(projectsActions.deleteProject, {
      run: (
        action: ReturnType<typeof projectsActions.deleteProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.delete(action.project).pipe(
          map((project: Project) => projectsActions.projectDeleted({ project })),
          tap(() => this.notify.notification('Deleted A Project'))
        );
      },
      onError: (action: ReturnType<typeof projectsActions.deleteProject>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectsPartialState>,
    private projectsService: ProjectService,
    private notify: NotifyService
  ) {}
}
