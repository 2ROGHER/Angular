import { Component, EventEmitter, Output } from '@angular/core';
import Timer from '../../models/domain/watcher.model';
import { ElementRef, Renderer2 as Render  } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  // Let's to create a new event emitter property
  @Output() createTimer = new EventEmitter<Timer>();
  private _el: ElementRef;
  private _render: Render;

  constructor(el: ElementRef, render: Render) {
    this._el = el;
    this._render = render;
  }

  // TODO: We need to implement validation for this form

  // Method to create a new timer
  createNewTimer(seconds: any, minutes: any, hours: any): any {
    this.createTimer.emit(new Timer(seconds, minutes, hours));
  }

  closePopup(): void {
    let el = this._el.nativeElement.querySelector('.form-container');
    this._render.setStyle(el, 'display', 'none');
  }
}
