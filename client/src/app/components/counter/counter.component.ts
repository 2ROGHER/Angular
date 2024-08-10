import { Component } from '@angular/core';
// This annotation is used to link JS code with HTML elements.
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count: number = 0;


  increment() {
    // TODO: Code to increment the counter
    this.count++;
  }

  reset() {
    return this.count = 0;
  }

  decrement() {
    this.count--;
  }

}


@Component({
  selector: "app-joke",// this is for default.
  standalone: true,
  template: "<p>Welcome to the angular class lessons here"

})

class JokeComponent {

}
