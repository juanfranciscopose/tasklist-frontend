import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { NewUserComponent } from './auth/store-user-form/new-user.component';
import { IndexComponent } from './index/index.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';
import { TaskTableComponent } from './task-table/task-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    NewUserComponent,
    IndexComponent,
    LoginFormComponent,
    TaskTableComponent
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
