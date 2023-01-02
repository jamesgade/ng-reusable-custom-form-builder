import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form-builder',
  templateUrl: './custom-form-builder.component.html',
  styleUrls: ['./custom-form-builder.component.scss']
})

export class CustomFormBuilderComponent {
  @Input() fields !: any[];
  @Output() formValue: any = new EventEmitter();

  customForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customForm = this.createForm();
  }

  createForm = () => {
    const group = this.formBuilder.group({});
    this.fields.forEach((field: any) => {
      group.addControl(field.name, new FormControl(''));
    })
    return group;
  }

  onSubmit = () => {
    if(this.customForm.valid){
      this.formValue.emit(this.customForm.value);
    }
  }

  // getValidators = (field: any) => {
  //   const validators = [];
  //   if (field.required) {
  //     validators.push(Validators.required);
  //   }
  //   if (field.minlength) {
  //     validators.push(Validators.minLength(field.minLength))
  //   }
  //   if (field.maxlength) {
  //     validators.push(Validators.maxLength(field.maxLength));
  //   }
  //   return validators;
  // }

  // getErrorMessage = (field: any) => {
  //   if(field.name.hasError('required')){
  //     return `Enter a value`
  //   }else if (field.name.hasError('minlength')){
  //     return `Minimum ${field.minLength} characters required`
  //   }else if(field.name.hasError('maxlength')){
  //     return `Maximum ${field.maximum} characters allowed`
  //   }
  //   return 'Error'
  // }

}
