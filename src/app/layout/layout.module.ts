import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule
  ],
  exports: [
    SidebarComponent
  ],
})
export class LayoutModule { }
