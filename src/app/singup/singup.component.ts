import { Component } from '@angular/core';
import { FormGroup , FormControl ,Validators} from '@angular/forms'
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  AddUser! : FormGroup;// AddUser  => name FormGroup => type

  ngOnInit() {
    this.AddUser = new FormGroup({//instance
      fullName : new FormControl('',[Validators.required ,Validators.minLength(5), Validators.pattern('[[a-zA-Z]]{5,}$')]),
      Email :new FormControl('',[Validators.required ,Validators.minLength(5)]),
      phoneNumber :new FormControl('',[Validators.required ,Validators.minLength(5), Validators.pattern('[[0-9]]{5}$')])
    })
  }


  SubmitForm() {
    console.log(this.AddUser)
    console.log(this.AddUser.value)
  }


}
