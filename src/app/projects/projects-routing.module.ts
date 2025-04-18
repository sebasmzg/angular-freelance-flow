import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsListComponent} from './pages/projects-list/projects-list.component';
import {ProjectsDetailComponent} from './pages/projects-detail/projects-detail.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: '',
  component: ProjectsComponent,
  children: [
    {path: 'list', component: ProjectsListComponent},
    {path: 'detail/:id',component: ProjectsDetailComponent},
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
