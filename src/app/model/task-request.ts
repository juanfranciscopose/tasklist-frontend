import { UserRequest } from './user-request';
import { ToDoRequest } from './to-do-request';

export class TaskRequest {
  id: number;
  title: string;
  description: string;
  timeStamp: Date;
  status: boolean;
  author: UserRequest;
  toDo: ToDoRequest[];
}
