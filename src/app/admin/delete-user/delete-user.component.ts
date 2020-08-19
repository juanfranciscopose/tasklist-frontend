import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserRequest } from 'src/app/model/user-request';
import { TokenService } from 'src/app/service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  id: number;
  userRequestList: UserRequest[] = [];
  constructor(
    private toastrService: ToastrService,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = +this.tokenService.getUserId();
    this.getAllUsers();
  }
  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.userRequestList = data;
    });
  }
  public isAdmin(user: UserRequest): boolean {
    return this.id === user.id;
  }

  public deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        this.getAllUsers();
        this.toastrService.success('Usuario borrado exitosamente');
      },
      (err) => {
        this.toastrService.error(
          'Se ha producido un error: ' + err.error.message
        );
      }
    );
  }
}
