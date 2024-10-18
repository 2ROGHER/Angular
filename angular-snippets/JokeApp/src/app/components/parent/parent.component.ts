import { Component } from '@angular/core';
import SimpleService from '../../providers/simple.provider';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  // Ahora veamos que pasa si configuramos nuestro (SimpleService) provider en nuestro (component) con la propiedad de (provider)
  providers: [SimpleService]
})
export class ParentComponent {
  service: string | any;

  constructor(private _service: SimpleService) {
      this.service = this._service;
   }
}
