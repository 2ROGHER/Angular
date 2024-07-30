import { Component } from '@angular/core';

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
