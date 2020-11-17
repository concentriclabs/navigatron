import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SessionsRoutingModule } from './sessions-routing.module';

import { LoginComponent } from './login/login.component';
import { UsersRoutingModule } from '../users/users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './../icons.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    SessionsRoutingModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SessionsModule { }
