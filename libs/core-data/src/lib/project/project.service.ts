import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
model = 'items'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  findOne(projectId: Project) {
    return this.httpClient.get(this.getUrlForId(projectId))
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  delete(project: Project) {
    return this.httpClient.delete(this.getUrlForId(project.id));
  }

  update(project: Project) {
    return this.httpClient.put(this.getUrlForId(project.id), project);
  }
}
