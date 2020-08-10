import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from '../model/user-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlStoreUser = 'http://localhost:8080/auth/';
  private urlUser = 'http://localhost:8080/users';
  constructor(private httpClient: HttpClient) { }

  public storeUser(userRequest: UserRequest): Observable<any> {
    return this.httpClient.post<string>(this.urlStoreUser + 'users', userRequest);
  }
}
