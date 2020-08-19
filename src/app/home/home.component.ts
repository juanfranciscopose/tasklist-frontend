import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.email = this.tokenService.getUsername();
  }

}
