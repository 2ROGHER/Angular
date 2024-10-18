import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Injecting ActivatedRoute for get the (parms router) variables by the route
  constructor(private _router: Router) {}

  onGoHome(): void {
    this._router.navigate(['']);
  }

  onGoSearch(): void {
    this._router.navigate(['search']);
  }
}
