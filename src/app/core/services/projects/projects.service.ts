import { Injectable } from '@angular/core';
import {enviroment} from '../../../../enviroments/enviroment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectRequest, ProjectResponse} from '../../../shared/models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly baseUrl = `${enviroment.apiUrl}/projects`;

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  constructor(private http: HttpClient) { }

  getProjects():Observable<ProjectResponse[]>{
    return this.http.get<ProjectResponse[]>(this.baseUrl);
  }

  createProject(project: ProjectRequest):Observable<string>{
    const body = {
      title: project.title,
      description: project.description,
      start_date: this.formatDate(project.startDate),
      delivery_date: this.formatDate(project.deliveryDate),
      state: project.state,
      userId: project.userId
    }
    return this.http.post<string>(`${this.baseUrl}/create`, body);
  }

  getProjectById(id: number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${this.baseUrl}/get/${id}`);
  }

  updateProject(id: number, project: ProjectRequest): Observable<ProjectResponse> {
    const body = {
      title: project.title,
      description: project.description,
      startDate: this.formatDate(project.startDate),
      deliveryDate: this.formatDate(project.deliveryDate),
      state: project.state
    }
    return this.http.put<ProjectResponse>(`${this.baseUrl}/update/${id}`, body);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
