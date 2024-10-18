import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.scss',
})
export class ModelFormComponent {
  langs: string[] = ['English', 'French', 'German'];

  // Let's create an instance of the model form component
  myForm: FormGroup | any;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      // es decir que el (FormGroup) crear un objeto de campos (inputs) y el (FormControl) los controla.
      name: new FormGroup({
        firstName: new FormControl(
          'intial value', // el primer argumento de este constructor es el (valor inicial) puede ser ''.
          Validators.required
        ),
        lastName: new FormControl(
          '', // initial value
          Validators.required
        ),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      language: new FormControl(),
    });
  }
  onSubmit(): void {
    this.myForm.valid
      ? window.alert(
          'Forms submitted successfully with value: ' + this.myForm.value
        )
      : window.alert('Error to submitting form!' + this.myForm.erros);
      // reset the form
      this.myForm.reset();
      // this.myForm.value = "",
  }
}
