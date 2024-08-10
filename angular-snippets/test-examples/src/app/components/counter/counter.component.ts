import { Component, HostListener, Inject } from '@angular/core';
import Counter from '../../models/domain/counter.model';
import Timer from '../../models/domain/watcher.model';
import { ElementRef, Renderer2 as Render } from '@angular/core';
@Component({
  selector: 'app-counter',
  // Other way to do it is here:
  // template: `
  //   <h1>Counter basic component</h1>
  // `,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  // Also we can to define styleUrls into array: styleUrls: ['./counter.component.scss'].
})
export class CounterComponent {
  // Let's create a new counter object
  counter: Counter = new Counter(0);
  private _el: ElementRef;
  private _render: Render;

  // Let's create a new property called watcher that is intace from Watcher object
  watcher: Timer = new Timer(0, 0, 0);

  stopWatcherList: Timer[] = [
    new Timer(0, 0, 0),
    new Timer(0, 0, 1),
    new Timer(3, 2, 23),
  ];

  constructor(el: ElementRef, render: Render) {
    this._el = el;
    this._render = render;
  }

  // One component life-cycle
  ngOnInit(): void {}

  // Method to add new watcher to list
  addTimerToList(watcher: Timer): void {
    console.log('stopwatcher created successfully');
    this.stopWatcherList.unshift(watcher);
  }

  // Method to add new show the new timer form popup
  addNewTimerPopup(): void {
    let element = this._el.nativeElement.querySelector('.form-container');
    this._render.setStyle(element, 'display', 'block');
  }

 
}
