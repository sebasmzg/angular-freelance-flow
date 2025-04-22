import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../../core/services/projects/projects.service';
import {ProjectResponse} from '../../../shared/models/projects.model';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FilesService } from '../../../core/services/files/files.service';
import { FileResponse } from '../../../shared/models/files.models';

@Component({
  selector: 'app-projects-detail',
  standalone: false,
  templateUrl: './projects-detail.component.html',
  styleUrl: './projects-detail.component.scss'
})
export class ProjectsDetailComponent implements OnInit {

  project: ProjectResponse | null = null;
  files: FileResponse[] = []

  constructor(
    private projectsService: ProjectsService,
    private filesService: FilesService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.projectsService.getProjectById(id).subscribe({
        next: (data: ProjectResponse) => {
          this.project = {
            ...data,
            start_date: new Date(data.start_date),
            delivery_date: new Date(data.delivery_date),
            created_at: new Date(data.created_at),
          };
          this.loadFiles(id);
        },
        error: (error) => console.error('Error fetching project:', error),
      })
    }
  }

  loadFiles(projectId: number){
    this.filesService.getFilesByProject(projectId).subscribe({
      next: (files) => this.files = files,
      error: (error) => console.error('Error fetching files:', error),
    })
  }

  onDeleteProject(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(res=>{
      if(res && this.project?.id){
        this.projectsService.deleteProject(this.project?.id).subscribe(()=>{
          this.router.navigate(['/projects']);
        })
      }
    })
  }

  onDeleteFile(fileId: number){
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: '¿Eliminar archivo?',
        message: '¿Estás seguro de que deseas eliminar este archivo? Esta acción no se puede deshacer.'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filesService.delete(projectId,fileId).subscribe({
          next: () => {
            this.files = this.files.filter(f => f.id !== fileId);
          }
        });
      }
    });
  }

  //todo create form to upload files
}
