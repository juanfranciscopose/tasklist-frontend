import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskRequest } from '../model/task-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:8080/tasks/';

  constructor(private httpClient: HttpClient) { }

  public storeTask(taskRequest: TaskRequest): Observable<any> {
    return this.httpClient.post<TaskRequest>(this.url , taskRequest);
  }

}
