import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SingupComponent } from './singup/singup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CounterComponent } from './counter/counter.component';
import { ProdactDetailsComponent } from './prodact-details/prodact-details.component';

const routes: Routes = [
  // {
  //   // path:"",angularaProjec
  //   component:ProductComponent
  // },
  {
    path:"",
    component:ProductComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"singup",
    component:SingupComponent
  },
  {
    path:"counter",
    component:CounterComponent
  },
  {
    path:"prodact-detalis/:id",
    component:ProdactDetailsComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
