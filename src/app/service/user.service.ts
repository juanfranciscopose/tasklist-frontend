import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from '../model/user-request';
import { TaskRequest } from '../model/task-request';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlStoreUser = 'http://localhost:8080/auth/';
  private urlUser = 'http://localhost:8080/users/';
  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient) { }

  public storeUser(userRequest: UserRequest): Observable<any> {
    return this.httpClient.post<string>(this.urlStoreUser + 'users', userRequest);
  }

  public getUserTask(): Observable<TaskRequest[]> {
    const userId = this.tokenService.getUserId();
    return this.httpClient.get<TaskRequest[]>(this.urlUser + userId + '/tasks');
  }
}
