import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../../core/services/projects/projects.service';
import { ProjectRequest, Status } from '../../../../shared/models/projects.model';

@Component({
  selector: 'app-update-project',
  standalone: false,
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.scss',
})
export class UpdateProjectComponent implements OnInit {
  form!: FormGroup;
  statuses = Object.values(Status);
  projectId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private projectService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.initForm();

    this.projectService.getProjectById(this.projectId).subscribe({
      next: (project: ProjectRequest) => {
        console.log('Proyecto a editar', project);

        const startDate = project.start_date ? new Date(project.start_date).toISOString().split('T')[0] : '';
        const deliveryDate = project.delivery_date ? new Date(project.delivery_date).toISOString().split('T')[0] : '';

        this.form.patchValue({
          title: project.title,
          description: project.description,
          start_date: startDate,
          delivery_date: deliveryDate,
          state: project.state
        });
      },
      error: (err) => console.error('Error loading project', err),
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      start_date: ['', Validators.required],
      delivery_date: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('subiendo', this.form.value);
      const updatedProject: ProjectRequest = {
        title: this.form.value.title,
        description: this.form.value.description,
        start_date: new Date(this.form.value.start_date),
        delivery_date: new Date(this.form.value.delivery_date),
        state: this.form.value.state,
      };

      this.projectService.updateProject(this.projectId, updatedProject).subscribe({
        next: () => {
          console.log('Proyecto actualizado');
          this.router.navigate(['/projects', this.projectId])
        },
        error: (err) => console.error('Error updating project', err),
      });
    }
  }

  goBack() {
    this.router.navigate(['/projects', this.projectId]);
  }
}
