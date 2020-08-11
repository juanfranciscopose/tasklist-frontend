import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { TaskCrudComponent } from './task-crud/task-crud.component';
import { OneTaskCardComponent } from './task-crud/one-task-card/one-task-card.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TaskCrudComponent},
  {path: 'tasks/:id', component: OneTaskCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
