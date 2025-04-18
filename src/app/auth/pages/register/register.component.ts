import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup;
  error: string | null = null;
  success: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.form = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required],
    })
  }

  onSubmit(){
    if(this.form.invalid) return;
    this.error = null;
    const values = this.form.value;
    this.authService.register(values.name,values.email,values.password).subscribe({
      next: ()=>{
        this.success = 'Registration successful! You can now login.';
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 2000);
      },
      error: (err)=>{
        this.error = 'Registration failed. Please try again.';
      }
    })
  }
}
