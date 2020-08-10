import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TaskRequest } from '../model/task-request';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
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
