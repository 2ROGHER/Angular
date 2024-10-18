import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// Let's import the RxJS library
import {map, filter } from  'rxjs/operators';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrl: './form-app.component.scss',
})
export class FormAppComponent {
  form: FormGroup ; // Esta instancia expone un Observable.
  comment = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('[^@]*@[^@]*'),
  ]);

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      comment: this.comment,
      name: this.name,
      email: this.email,
    });

    this.form?.valueChanges
      .pipe(
        filter(() => this.form?.valid), // Usamos 'pipe' para encadenar operadores
        map((data: any) => {
          data.comment = data.comment.replace(/<(?:.|\n)*?/gm, '');
          return data;
        }),
        map((data: any) => {
          data.lastUpdated = new Date().getTime().toString();
          return data;
        })
      )
      .subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {
    // como FromsGroup gnera un observable, podemos subcribirnos a este
    // y pode ver la salida del flujo.
    // this.form?.valueChanges.subscribe((v) => console.log(v));
  }

  onSubmit(): void {
    window.alert('Forms submitted successfully!');
  }
}
