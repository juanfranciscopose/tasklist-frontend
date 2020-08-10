import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TaskRequest } from 'src/app/model/task-request';
import { TokenService } from 'src/app/service/token.service';
import { UserRequest } from 'src/app/model/user-request';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  userId: number;
  title: string;
  description: string;
  status = true;
  isStoreTaskFail = false;
  errormessage: string;
  constructor(
    private taskService: TaskService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.userId = +this.tokenService.getUserId();
  }
  public storeTask(): void {
    const taskRequest: TaskRequest = new TaskRequest();
    const userRequest: UserRequest = new UserRequest();
    taskRequest.description = this.description;
    taskRequest.title = this.title;
    taskRequest.status = this.status;
    taskRequest.author = userRequest;
    taskRequest.author.id = this.userId;
    taskRequest.timeStamp = new Date();
    this.taskService.storeTask(taskRequest).subscribe(
      (data) => {
        this.title = undefined;
        this.description = undefined;
        this.status = undefined;
        this.isStoreTaskFail = false;
        window.location.reload();
      }
    );
  }
}
