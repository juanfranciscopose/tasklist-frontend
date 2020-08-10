import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TaskRequest } from '../../model/task-request';

@Component({
  selector: 'app-task-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public tasks: TaskRequest[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserTask().subscribe(
      (data) => {
        this.tasks = data;
      }
    );
  }

}
