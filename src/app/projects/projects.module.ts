import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectsDetailComponent } from './pages/projects-detail/projects-detail.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UpdateProjectComponent } from './pages/update-project/update-project.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectsDetailComponent,
    ProjectsComponent,
    CreateProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatLabel,
    MatSelectModule,
    MatListModule,
    MatIconModule
  ]
})
export class ProjectsModule { }
