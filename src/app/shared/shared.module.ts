import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule, MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatNavList,
    MatListModule,
    MatIconButton,
    MatTooltip,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    ConfirmDialogComponent,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatNavList,
    MatListModule,
    MatIconButton,
    MatTooltip,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule { }
