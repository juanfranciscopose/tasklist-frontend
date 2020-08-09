import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  visibleUser = false;
  visibleLogin = true;

  constructor() {}

  ngOnInit(): void {}

  public toggleLogin(): void {
    this.visibleLogin = true;
    this.visibleUser = false;
  }
  public toggleUser(): void {
    this.visibleUser = true;
    this.visibleLogin = false;
  }
}
