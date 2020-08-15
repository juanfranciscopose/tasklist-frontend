import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { ToDoService } from 'src/app/service/to-do.service';
import { TaskRequest } from 'src/app/model/task-request';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToDoRequest } from 'src/app/model/to-do-request';
import { ToastrService } from 'ngx-toastr';
import { UserRequest } from 'src/app/model/user-request';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-one-task-card',
  templateUrl: './one-task-card.component.html',
  styleUrls: ['./one-task-card.component.css'],
})
export class OneTaskCardComponent implements OnInit {
  authorIsCurrentUser = false;
  visibleEditfields = false;
  visibleToDo = false;
  userRequest: UserRequest = new UserRequest();
  toDoRequest: ToDoRequest = new ToDoRequest();
  id: number;
  taskRequest: TaskRequest = new TaskRequest();
  constructor(
    private routeRedirect: Router,
    private tokenService: TokenService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private toDoService: ToDoService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(this.id).subscribe(
      (data) => {
        this.taskRequest = data;
        if (this.taskRequest.author.id === +this.tokenService.getUserId()) {
          this.authorIsCurrentUser = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public toggleVisible(): void {
    this.visibleToDo = !this.visibleToDo;
  }

  public toDoStore(): void {
    const task: TaskRequest = new TaskRequest();
    task.id = this.id;
    this.toDoRequest.task = task;
    this.toDoRequest.timeStamp = new Date();

    this.toDoService.storeToDo(this.toDoRequest).subscribe(
      (data) => {
        this.toDoRequest.description = undefined;
        this.toDoRequest.timeStamp = undefined;
        this.toDoRequest.task = undefined;

        this.refreshToDoList(this.id);
        this.toggleVisible();
        this.toastrService.success('Tarea agregada');
      },
      (err) => {
        console.log(err);
        this.toastrService.error(err.error.message);
      }
    );
  }

  public deleteToDo(id: number): void {
    this.toDoService.deleteToDo(id).subscribe(
      (data) => {
        this.refreshToDoList(this.id);
        this.toastrService.success('Tarea eliminada');
      }
    );
  }

  private refreshToDoList(id: number): void {
    this.taskService.getAllTaskToDo(this.id).subscribe((data) => {
      this.taskRequest.toDo = data;
    });
  }

  public changeStatus(id: number): void {
    this.toDoService.changeStatus(id).subscribe(
      (data) => {
        this.refreshToDoList(this.id);
        this.toastrService.success('Tarea actualizada');
      }
    );
  }

  public visibleEdit(): void {
    this.visibleEditfields = !this.visibleEditfields;
  }

  public updateTask(): void {
    this.userRequest.id = +this.tokenService.getUserId();
    this.taskRequest.author = this.userRequest;
    this.taskService.editTask(this.taskRequest).subscribe(
      (data) => {
        this.visibleEditfields = false;
        this.toastrService.success('Proyecto actualizado');
      },
      (err) => {
        this.toastrService.error(err.error.message);
      }
    );
  }

  public delete(): void {
    this.taskService.deleteTask(this.id).subscribe(
      (data) => {
        this.routeRedirect.navigateByUrl('/tasks');
        this.toastrService.success('Proyecto Eliminado');
      }
    );
  }
}
