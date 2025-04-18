export interface ProjectResponse {
  id?: number,
  title: string,
  description: string,
  startDate: Date,
  deliveryDate: Date,
  state: Status,
  userId?: number,
  createdAt: string,
}

export interface ProjectRequest {
  title: string,
  description: string,
  startDate: Date,
  deliveryDate: Date,
  state: Status,
}

export enum Status {
  'Pending' = 'PENDING',
  'In Progress' = 'IN PROGRESS',
  'Completed' = 'COMPLETED',
}
