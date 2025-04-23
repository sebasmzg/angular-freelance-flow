import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilesService} from '../../../../core/services/files/files.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-upload-file',
  standalone: false,
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent implements OnInit {
  form!: FormGroup;
  selectedFiles: File[] = [];
  projectId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fileService: FilesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileSelected(e:Event) {
    const input = e.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
      this.form.get('file')?.setValue(this.selectedFiles)
    }
  }

  onSubmit(){
    if(this.form.valid && this.selectedFiles.length > 0){
      const uploadData = this.selectedFiles.map((file)=>{
        const formData = new FormData();
        formData.append('file', file);
        return this.fileService.uploadFile(this.projectId, formData)
      });

      Promise.all(uploadData.map(obs=>lastValueFrom(obs)))
        .then(()=>this.router.navigate(['/projects', this.projectId]))
        .catch((err: unknown) => console.error(err));
    }
  }
}
