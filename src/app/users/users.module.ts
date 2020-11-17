import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from './../icons.module';
import { UsersRoutingModule } from './users-routing.module';

import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    IconsModule
  ]
})
export class UsersModule { }
