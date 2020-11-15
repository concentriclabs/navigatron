import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';

import { LoginComponent } from './login/login.component';
import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    InputComponent,
    ButtonComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ]
})
export class SessionsModule { }
