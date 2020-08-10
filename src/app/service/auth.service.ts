import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from '../model/user-request';
import { LoginRequest } from '../model/login-request';
import { Credential } from '../model/credential';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private url = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(loginRequest: LoginRequest): Observable<Credential> {
    return this.httpClient.post<Credential>(this.url + 'login', loginRequest);
  }
}
