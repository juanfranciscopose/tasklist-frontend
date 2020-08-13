import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskRequest } from '../model/task-request';
import { Observable } from 'rxjs';
import { ToDoRequest } from '../model/to-do-request';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:8080/tasks/';

  constructor(private httpClient: HttpClient) { }

  public storeTask(taskRequest: TaskRequest): Observable<any> {
    return this.httpClient.post<any>(this.url , taskRequest);
  }

  public getTaskById(id: number): Observable<TaskRequest> {
    return this.httpClient.get<TaskRequest>(this.url + id);
  }

  public getAllPublicTask(): Observable<TaskRequest[]> {
    return this.httpClient.get<TaskRequest[]>(this.url);
  }
  public getAllTaskToDo(id: number): Observable<ToDoRequest[]> {
    return this.httpClient.get<ToDoRequest[]>(this.url + id + '/todo');
  }
  public editTask(taskRequest: TaskRequest): Observable<any> {
    return this.httpClient.put<any>(this.url, taskRequest);
  }
}
