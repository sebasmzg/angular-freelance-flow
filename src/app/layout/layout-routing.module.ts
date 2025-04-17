import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AuthGuard} from "../core/guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projects',
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'files',
        loadChildren: () => import('../files/files.module').then(m => m.FilesModule)
      },
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
