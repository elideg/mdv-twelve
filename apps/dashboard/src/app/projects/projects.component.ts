import { ProjectsFacade } from '@mdv-twelve/core-state';
import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '@mdv-twelve/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-twelve-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectComponent implements OnInit {
  form: FormGroup;
  selectedProject$: Observable<Project> = this.projectsFacade.selectedProject$;
  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private projectsFacade: ProjectsFacade
    ) { }

  ngOnInit() {
    this.initForm();
    this.projectsFacade.loadProjects();
    this.selectProject({ id: null } as Project);
  }

  selectProject(project: Project) {
    this.projectsFacade.selectProject(project.id);
    this.form.patchValue(project);
  }

  cancel() {
    this.form.reset();
    this.selectProject({ id: null } as Project);
  }

  saveProject(project: Project) {
    if(this.form.invalid) return;
      project.id ?
        this.projectsFacade.updateProject(project) :
        this.projectsFacade.createProject(project);
  }

  deleteProject(project: Project) {
    this.projectsFacade.deleteProject(project);
    this.projectsFacade.loadProjects();
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }

}
