import { ProjectsFacade } from '@mdv-twelve/core-state';
import { ProjectService, Project } from '@mdv-twelve/core-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-twelve-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {
  currentProject$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private projectFacade: ProjectsFacade
  ) { }

  ngOnInit() {
    this.projectFacade.loadProjects();
    this.route.params.subscribe((param) => this.projectFacade.selectProject(param['id']));
    this.currentProject$ = this.projectFacade.selectedProject$
  }

}
