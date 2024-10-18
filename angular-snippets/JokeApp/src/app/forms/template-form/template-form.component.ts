import { Component, ViewChild } from '@angular/core';
import Signup from '../../models/domain/sign-up.model';
import { SimpleService } from '../../providers';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {
  // two-way binding
  // email: string = '';
  // using models
  model: Signup = new Signup();

  @ViewChild('myForm')
  form: any;

  langs: string[] = ['English', 'French', 'German'];

  // This component requests an instance of SimpleService by the constructor.
  // This is aplying DI framework in Angular
  constructor(private _simpleService: SimpleService) {}

  onSubmit(): void {
    window.alert('Form sent successfully!');
    if (this.form.valid) {
      this.form.reset();
    }
  }
}
