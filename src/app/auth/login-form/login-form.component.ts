import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/model/login-request';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  providers: [TokenService, AuthService],
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  private loginRequest: LoginRequest;
  username: string;
  password: string;
  private roles: string[] = [];
  errormessage: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = undefined;
    this.password = undefined;
    // login successful before loading the page
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  public onLogin(): void {
    if (!this.isLogged) {
      this.loginRequest = new LoginRequest(this.username, this.password);
      this.authService.login(this.loginRequest).subscribe(
        (data) => {
          this.isLogged = true;
          this.isLoginFail = false;
          this.tokenService.setUserId(data.userId);
          this.tokenService.setToken(data.token);
          this.tokenService.setUsername(data.username);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigateByUrl('/public-tasks');
        },
        (err) => {
          this.isLogged = false;
          this.isLoginFail = true;
          // fix -> description empty on Exceptions (undefined)
          this.errormessage = err.error.mesage;
          console.log(err.error.mesage);
        }
      );
    }else{
      this.router.navigateByUrl('');
    }
  }
}
