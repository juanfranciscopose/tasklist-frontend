import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css']
})
export class TaskCrudComponent implements OnInit {
  visibleTaskForm = false;
  constructor() { }

  ngOnInit(): void {
  }
  public toggleTaskForm(): void{
    this.visibleTaskForm = !this.visibleTaskForm;
  }

}
