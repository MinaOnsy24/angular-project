import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  //donw
  //   {
  //   path:"",
  //   component:LoginComponent

  // },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'singup',
    component:SignupComponent
  }
  // {
  //   path:"**",
  //   component:
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
