import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserRequest } from 'src/app/model/user-request';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  providers: [ToastrService, AuthService],
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  errormessage: string;
  isStoreUserFail = false;

  email: string;
  password: string;
  name: string;
  surname: string;
  telephone?: number;
  private userRequest: UserRequest = new UserRequest();

  constructor(
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.email = undefined;
    this.name = undefined;
    this.surname = undefined;
    this.password = undefined;
    this.telephone = undefined;
  }
  public storeUser(): void {
    // set userRequest
    this.userRequest.email = this.email;
    this.userRequest.name = this.name;
    this.userRequest.password = this.password;
    this.userRequest.surname = this.surname;
    if (this.telephone) {
      this.userRequest.telephone = this.telephone;
    }
    // new user
    this.authService.storeUser(this.userRequest).subscribe(
      (data) => {
        this.isStoreUserFail = false;
        this.email = undefined;
        this.name = undefined;
        this.surname = undefined;
        this.password = undefined;
        this.telephone = undefined;
        this.toastrService.success('usuario creado correctamente');
      },
      (err) => {
        this.isStoreUserFail = true;
        // fix -> description empty on Exceptions (undefined)
        this.errormessage = err.error.mesage;
        console.log(err.error.mesage);
      }
    );

  }

}
