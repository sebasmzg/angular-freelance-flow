import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsListComponent} from './pages/projects-list/projects-list.component';
import {ProjectsDetailComponent} from './pages/projects-detail/projects-detail.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {CreateProjectComponent} from "./pages/create-project/create-project.component";
import {UpdateProjectComponent} from './pages/update-project/update-project.component';

const routes: Routes = [
  {path: '',
  component: ProjectsComponent,
  children: [
    {path: 'list', component: ProjectsListComponent},
    {path: 'create', component: CreateProjectComponent},
    {path: ':id',component: ProjectsDetailComponent},
    {path: ':id/update', component: UpdateProjectComponent},
    {path: '',
    redirectTo: 'list',
    pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
