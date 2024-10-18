import { Component } from '@angular/core';
import SimpleService from '../../providers/simple.provider';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  service: string | any;
  constructor(private _service: SimpleService) {
    this.service = _service;
  }
}
