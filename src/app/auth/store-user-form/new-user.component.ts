import { Component, OnInit } from '@angular/core';
import { UserRequest } from 'src/app/model/user-request';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  providers: [UserService, ToastrService],
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
    private userService: UserService
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
    this.userService.storeUser(this.userRequest).subscribe(
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
