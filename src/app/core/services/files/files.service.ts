import { Injectable } from '@angular/core';
import { enviroment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FileResponse,
  FileUploadResponse,
} from '../../../shared/models/files.models';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private readonly baseUrl = `${enviroment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getFilesByProject(projectId: number): Observable<FileResponse[]> {
    return this.http.get<FileResponse[]>(`${this.baseUrl}/${projectId}/files`);
  }

  uploadFile(
    projectId: number,
    formData: FormData
  ): Observable<FileUploadResponse> {
    return this.http.post<FileUploadResponse>(
      `${this.baseUrl}/${projectId}/files/upload`,
      formData
    );
  }

  getFileById(projectId: number, fileId: number): Observable<FileResponse> {
    return this.http.get<FileResponse>(
      `${this.baseUrl}/${projectId}/files/${fileId}`
    );
  }

  delete(projectId: number, fileId: number): Observable<string> {
    return this.http.delete<string>(
      `${this.baseUrl}/${projectId}/files/${fileId}`
    );
  }
}
