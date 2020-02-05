import { Project } from '@mdv-twelve/core-data';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-twelve-project-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject;
  originalTitle;


  @Input() form: FormGroup
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() set project(value) {
    if (value) this.originalTitle = value.name;
      this.currentProject = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(project: Project) {
    this.saved.emit(project);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm() {
    this.save(this.form.value)
  }
}
