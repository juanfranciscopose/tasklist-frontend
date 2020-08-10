import { TaskRequest } from './task-request';

export class ToDoRequest {
  id: number;
  description: string;
  timeStamp: Date;
  task: TaskRequest;
  status: boolean;
}
