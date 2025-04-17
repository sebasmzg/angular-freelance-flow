import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.form.invalid) return
    this.error = null;
    const credentials = this.form.value;
    this.authService.login(credentials.email, credentials.password).subscribe({
      next: (res)=>{
        this.router.navigate(['/projects']);
      },
      error: (err)=>{
        this.error = 'Invalid email or password';
      }
    })
  }
}
