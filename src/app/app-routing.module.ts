import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { TaskCrudComponent } from './task-crud/task-crud.component';
import { OneTaskCardComponent } from './task-crud/one-task-card/one-task-card.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './task-crud/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'public-tasks', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TaskCrudComponent},
  {path: 'tasks/:id', component: OneTaskCardComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
