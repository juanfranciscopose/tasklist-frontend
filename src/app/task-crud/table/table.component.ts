import { Component, OnInit } from '@angular/core';
import { TaskRequest } from '../../model/task-request';
import { TaskService } from 'src/app/service/task.service';
import { ToDoRequest } from 'src/app/model/to-do-request';

@Component({
  selector: 'app-task-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public tasks: TaskRequest[];
  public toDoList: ToDoRequest[];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getAllPublicTask().subscribe(
      (data) => {
        this.tasks = data;
      }
    );
  }
  public seeToDoList(id: number): void {
    this.taskService.getAllTaskToDo(id).subscribe(
      (data) => {
        this.toDoList = data;
      }
    );
  }

}
