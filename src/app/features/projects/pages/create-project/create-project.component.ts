import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProjectRequest, Status} from '../../../../shared/models/projects.model';
import {ProjectsService} from '../../../../core/services/projects/projects.service';
import {AuthService} from '../../../../core/services/auth/auth.service';


@Component({
  selector: 'app-create-project',
  standalone: false,
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit {
  form!: FormGroup;
  statuses = Object.values(Status);

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectsService,
    private authService: AuthService
  ) {}

  ngOnInit(){
    this.form = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      startDate: ['',Validators.required],
      deliveryDate: ['',Validators.required],
      state: [Status.Pending,Validators.required],
    })
  }

  onSubmit() {
    if(this.form.valid){
      const formValue = this.form.value;
      const userId = this.authService.getUserIdFromToken();
      const formatted: ProjectRequest = {
        title: formValue.title,
        description: formValue.description,
        start_date: new Date(formValue.startDate),
        delivery_date: new Date(formValue.deliveryDate),
        state: formValue.state,
        userId: Number(userId)
      };

      this.projectService.createProject(formatted).subscribe({
        next: () => this.router.navigate(['/projects']),
        error: (err: unknown) => console.error(err)
      });
    }
  }
}
