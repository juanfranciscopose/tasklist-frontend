import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TaskRequest } from 'src/app/model/task-request';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-one-task-card',
  templateUrl: './one-task-card.component.html',
  styleUrls: ['./one-task-card.component.css']
})
export class OneTaskCardComponent implements OnInit {
  id: number;
  taskRequest: TaskRequest = new TaskRequest();
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
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

}
