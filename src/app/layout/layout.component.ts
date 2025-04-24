import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '../core/services/auth/auth.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private authService: AuthService
  ) {}

  logout(){
    this.authService.logout()
  }
}
