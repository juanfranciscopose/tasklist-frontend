import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login-request';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [TokenService, AuthService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  private loginRequest: LoginRequest;
  private username: string;
  private password: string;
  private roles: string[] = [];

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // login successful before loading the page
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  public onLogin(): void {
    this.loginRequest = new LoginRequest(this.username, this.password);
    this.authService.login(this.loginRequest).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles =  data.authorities;
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        console.log(err);

      }
    );
  }

}
