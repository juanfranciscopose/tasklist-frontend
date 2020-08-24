import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  providers: [TokenService],
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public tokenService: TokenService, private router: Router) {}
  public isAdmin(): boolean {
    return this.tokenService.getAuthorities().includes('ROLE_ADMIN');
  }
  public onLogout(): void {
    this.tokenService.logOut();
    this.router.navigateByUrl('/login');
  }
}
