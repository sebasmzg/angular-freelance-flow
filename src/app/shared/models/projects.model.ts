export interface ProjectResponse {
  id?: number,
  title: string,
  description: string,
  start_date: Date,
  delivery_date: Date,
  state: Status,
  userId?: number,
  created_at: Date,
}

export interface ProjectRequest {
  title: string,
  description: string,
  startDate: Date,
  deliveryDate: Date,
  state: Status,
  userId?: number
}

export enum Status {
  'Pending' = 'PENDING',
  'In Progress' = 'IN PROGRESS',
  'Completed' = 'COMPLETED',
}
