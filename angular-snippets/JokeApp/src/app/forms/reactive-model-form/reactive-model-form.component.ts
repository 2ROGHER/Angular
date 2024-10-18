import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrl: './reactive-model-form.component.scss',
})
export class ReactiveModelFormComponent implements OnInit {
  searchField: FormControl | any;
  searches: string[] = [];

  ngOnInit(): void {
    this.searchField = new FormControl(); // este es el form control
    this.searchField.valueChanges
      .debounceTime(400) // TODO: this method is changed in early version. Figure out the correct method.
      .subscribe((term: string) => {
        this.searches.push(term);
      });
  }
}
