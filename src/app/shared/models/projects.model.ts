
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
  start_date: Date,
  delivery_date: Date,
  state: Status,
  userId?: number
}

export enum Status {
  'Pending' = 'pending',
  'In Progress' = 'in progress',
  'Completed' = 'completed',
}
