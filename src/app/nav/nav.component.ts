import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  constructor(
   public tokenService: TokenService
  ) {}
  public onLogout(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
