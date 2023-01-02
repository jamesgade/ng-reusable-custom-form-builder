import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent {
  @Input() fields !: any[];
  form: FormGroup;
  @Output() formValue: any = new EventEmitter();

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnChanges() {
    if(this.fields) {
      this.fields.forEach(field => {
        const control = new FormControl('', this.getValidators(field));
        this.form.addControl(field.name, control);
      })
    }
  }

  onSubmit = () => {
    if(this.form.valid){
      this.formValue.emit(this.form.value);
    }
  }

  getValidators = (field: any) => {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }
    if (field.minLength) {
      validators.push(Validators.minLength(field.minLength))
    }
    if (field.maxLength) {
      validators.push(Validators.maxLength(field.maxLength));
    }
    return validators;
  }

  getErrorMessage = (field: any) => {
    if(this.form.get(field.name)?.hasError('required')){
      return `This is a required field`
    }else if (this.form.get(field.name)?.hasError('minLength')){
      return `Minimum ${field.minLength} characters required`
    }else if(this.form.get(field.name)?.hasError('maxLength')){
      return `Maximum ${field.maxLength} characters allowed`
    }
    return 'Error occured.'
  }

}
