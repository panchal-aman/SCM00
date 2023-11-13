import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    RegistrationComponent
  ]
})
export class AuthModule { }
