import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { ToDoService } from 'src/app/service/to-do.service';
import { TaskRequest } from 'src/app/model/task-request';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoRequest } from 'src/app/model/to-do-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-one-task-card',
  templateUrl: './one-task-card.component.html',
  styleUrls: ['./one-task-card.component.css']
})
export class OneTaskCardComponent implements OnInit {
  visibleToDo = false;
  toDoRequest: ToDoRequest = new ToDoRequest();
  id: number;
  taskRequest: TaskRequest = new TaskRequest();
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private toDoService: ToDoService,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(this.id).subscribe(
      (data) => {
        this.taskRequest = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public toggleVisible(): void {
    this.visibleToDo = !this.visibleToDo;
  }

  public taskStore(): void {
    const task: TaskRequest = new TaskRequest();
    task.id = this.id;
    this.toDoRequest.task = task;
    this.toDoRequest.timeStamp = new Date();

    this.toDoService.storeToDo(this.toDoRequest).subscribe();

    this.toDoRequest.description = undefined;
    this.toDoRequest.timeStamp = undefined;
    this.toDoRequest.task = undefined;

    this.sleep(1000);
    this.refreshToDoList(this.id);
    this.toggleVisible();
    this.toastrService.success('Tarea agregada');
  }

  public deleteToDo(id: number): void {
    this.toDoService.deleteToDo(id).subscribe();
    this.sleep(1000);
    this.refreshToDoList(this.id);
    this.toastrService.success('Tarea eliminada');
  }

  private refreshToDoList(id: number): void{
    this.taskService.getAllTaskToDo(this.id).subscribe(
      (data) => {
        this.taskRequest.toDo = data;
      }
    );
  }

  public sleep(milliseconds): void{
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
}
