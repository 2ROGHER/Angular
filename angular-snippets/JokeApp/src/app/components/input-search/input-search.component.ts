import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _search: SearchService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      console.log(params);
      if(params['term']) {
        //TODO: execute the service here
      }
    });
  }

  onSearch(term: string): void {
    // without optional parameters
    // this._router.navigate(['search', term]);

    // with optional parameters
    // we are using the (matrix URL notation)
    this._router.navigate(['search', { term }]);
  }

  canDeactivate(): void {
    // return this.search.result.length > 0;
  }
}
