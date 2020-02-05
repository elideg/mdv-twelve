import { Project } from '@mdv-twelve/core-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-twelve-project-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  @Input() projects: Project[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(project: Project) {
    this.selected.emit(project);
  }

  delete(project: Project) {
    this.deleted.emit(project);
  }
}
