import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { NewUserComponent } from './auth/store-user-form/new-user.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';
import { TaskCrudComponent } from './task-crud/task-crud.component';
import { TaskFormComponent } from './task-crud/task-form/task-form.component';
import { TableComponent } from './task-crud/table/table.component';
import { TaskCardComponent } from './task-crud/task-card/task-card.component';
import { OneTaskCardComponent } from './task-crud/one-task-card/one-task-card.component';
import { HomeComponent } from './home/home.component';
import { DeleteUserComponent } from './admin/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    NewUserComponent,
    LoginFormComponent,
    TaskCrudComponent,
    TaskFormComponent,
    TableComponent,
    TaskCardComponent,
    OneTaskCardComponent,
    HomeComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
