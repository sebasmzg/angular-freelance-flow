export interface FileResponse {
    id:          number;
    filename:    string;
    project_id:  number;
    uploaded_at: Date;
}

export interface FileUploadResponse {
    message: string;
}