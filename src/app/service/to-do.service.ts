import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoRequest } from '../model/to-do-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private url = 'http://localhost:8080/todo/';

  constructor(private httpClient: HttpClient) { }

  public storeToDo(toDoRequest: ToDoRequest): Observable<any> {
    return this.httpClient.post<any>(this.url , toDoRequest);
  }
}