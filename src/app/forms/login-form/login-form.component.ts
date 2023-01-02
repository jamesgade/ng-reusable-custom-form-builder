import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginFields = [
    {
      label: 'First Name',
      type: 'text',
      name: 'firstName',
      required: true,
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'lastName',
      required: true
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      required: true
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      required: true,
      minlength: 6
    },
  ]

  login = (formValue: any) => {
    console.log(formValue);
  }

}
