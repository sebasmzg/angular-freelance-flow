import {Component, OnInit} from '@angular/core';
import {ProjectResponse} from '../../../../shared/models/projects.model';
import {ProjectsService} from '../../../../core/services/projects/projects.service';

@Component({
  selector: 'app-projects-list',
  standalone: false,
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent implements OnInit {
  projects: ProjectResponse[] = [];

  constructor(private projectsService: ProjectsService){}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error('Error fetching projects', err),
    })
  }


}
