import { Component } from '@angular/core';
import SearchService from '../../services/search-term.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
})
export class SearchFieldComponent {
  loading: boolean = false;
  constructor(private _searchService: SearchService) {}

  onSearch(value: string): void {
    console.log('onSearch works successfully');
    this.loading = true;
    this._searchService.search(value).then((res: any) => {
      this.loading = false;
    })
    .catch((error: any) => {
      console.log(error);
    });

  }
}
