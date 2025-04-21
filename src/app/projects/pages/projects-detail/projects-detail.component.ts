import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../core/services/projects/projects.service';
import {ProjectResponse} from '../../../shared/models/projects.model';

@Component({
  selector: 'app-projects-detail',
  standalone: false,
  templateUrl: './projects-detail.component.html',
  styleUrl: './projects-detail.component.scss'
})
export class ProjectsDetailComponent implements OnInit {

  project: ProjectResponse | null = null;
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.projectsService.getProjectById(id).subscribe({
        next: (data: ProjectResponse) => {
          console.log('Project data:', data);
          this.project = {
            ...data,
            start_date: new Date(data.start_date),
            delivery_date: new Date(data.delivery_date),
            created_at: new Date(data.created_at),
          };
        },
        error: (error) => console.error('Error fetching project:', error),
      })
    }
  }
}
