import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectsDetailComponent } from './pages/projects-detail/projects-detail.component';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectsDetailComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
