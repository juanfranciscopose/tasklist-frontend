import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { TaskRequest } from 'src/app/model/task-request';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  public tasks: TaskRequest[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserTask().subscribe(
      (data) => {
        console.log(data);
        this.tasks = data;
      }
    );
  }

}
