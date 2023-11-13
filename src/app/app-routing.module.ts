import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { RegistrationComponent } from './auth/component/registration/registration.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrationPage', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
