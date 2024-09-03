import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css',
})
export class PillComponent {
  @Input() info: any = {
    content: '',
    type: '',
    size: '',

  };

  arrayColors: any = [
    {
      id: 1,
      color: '#fcfcdb',
    },
    {
      id: 2,
      color: '#cae8eb',
    },
    {
      id: 3,
      color: 'rgb(231, 237, 250)',
    },
    {
      id: 4,
      color: '#fdebd7',
    },
    {
      id: 5,
      color: '#e0cee9',
    }


  ];

  // We need to change this method to bind the list with a specific value.
  getRandomValue(): number {
    return Math.floor(Math.random() * 5);
  }
}

