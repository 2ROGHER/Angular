import { Component } from '@angular/core';
import { Renderer2 as Render, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {
  public state: boolean = false;
  public elementToIcon: ElementRef | undefined;
  public  elementToMenu: ElementRef | undefined;

  constructor(private _render: Render, private _el: ElementRef) {}

  ngOnInit(): void {
    this.elementToIcon = this._el.nativeElement.querySelector('#drop-down-icon');
    this.elementToMenu = this._el.nativeElement.querySelector('.drop-down-menu');
  }

  clickMenu(): void {
    this.state = !this.state;
    this.dropUpDownIcon()
    this.showHidenMenu();


  }

  dropUpDownIcon(): void {
    // Get the 'id' to add custom styles to animate the button click envent
    if (this.state) {
      this._render.setStyle(this.elementToIcon, 'transform', 'rotate(180deg)');
    } else {
      this._render.setStyle(this.elementToIcon, 'transform', 'rotate(0deg)');
    }
  }

  showHidenMenu(): void {
    if(this.state) {
      this._render.setStyle(this.elementToMenu, 'display', 'block');
    } else {
      this._render.setStyle(this.elementToMenu, 'display', 'none');
    }
  }
}
