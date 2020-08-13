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
    return this.httpClient.post<any>(this.url, toDoRequest);
  }

  public deleteToDo(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + id);
  }

  public changeStatus(id: number): Observable<any> {
    return this.httpClient.put<any>(this.url + 'status/' + id, null);
  }

  public editToDo(toDoRequest: ToDoRequest): Observable<any> {
    return this.httpClient.put<any>(this.url, toDoRequest);
  }
}
