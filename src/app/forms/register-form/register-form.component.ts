import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerFormFields = [
    {
      label: 'First Name',
      type: 'text',
      name: 'firstName',
      required: true,
      maxLength: 8
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
      minLength: 6
    },
  ]

  register = (event: any) => {
    console.log(event);
  }
}
