import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2 as Render,
} from '@angular/core';
// import Rx, { interval } from 'rxjs';

@Directive({
  selector: '[ccCardHover]',
})
export class CardHoverDirective {
  // De esta manera si queremos agregar mas parametros de configuracion
  // solo lo agregaremos en este objeto.
  @Input('ccCardHover')
  config: any = {
    querySelector: '.card-text',
  };

  @HostBinding('class.card-outline-primary')
  private _isHovering: boolean = false;
  // Cuando la directiva es creada con el constructor, Angular puede (injectar)
  // una instancia de algo llamado: ElementRef dentro del constructor.
  constructor(private _el: ElementRef, private _render: Render) {
    // this._render.setStyle(this._el.nativeElement, 'background', 'gray');
  }

  @HostListener('mouseover')
  onMouseOver(): void {
    // let el = this._el.nativeElement.querySelector('.card-text');
    let el = this._el.nativeElement.querySelector(this.config.querySelector);
    el && this._render.setStyle(el, 'display', 'block');
    this._isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    // let el = this._el.nativeElement.querySelector('.card-text');
    let el = this._el.nativeElement.querySelector(this.config.querySelector);
    el && this._render.setStyle(el, 'display', 'none');
    this._isHovering = false;
  }
}
