import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
{
  path:"navbar",
  component:NavbarComponent
},
{
  path:"footer",
  component:FooterComponent
}

];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]

})
export class SharedModule { }
