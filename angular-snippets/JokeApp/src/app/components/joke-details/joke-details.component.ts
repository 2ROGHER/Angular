import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrl: './joke-details.component.scss',
})
export class JokeDetailsComponent {
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => console.log(params));
  }
}
