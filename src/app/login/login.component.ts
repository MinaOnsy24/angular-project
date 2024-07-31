import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  SubmitForm(form:any){
    console.log(typeof(form.value))
    console.log(form.value)
  }
}
