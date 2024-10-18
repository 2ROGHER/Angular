import { Component } from '@angular/core';
import SearchService from '../../services/search-term.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
})
export class ListItemsComponent {
  constructor(private _fetchService: SearchService) {}


}
