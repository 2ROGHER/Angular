import { Component, Input } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  public paginationItem: number = 1;
  public results: Object[] = [];

  constructor(private _fetchDataService: FetchDataService) {
    // this is one way to get data from other API
    // this.data = this._fetchDataService.doGET();
  }

  // OR We can use ngOnInit method
  ngOnInit(): void {
    // Here
    this.getData(1); // Get data for default the first page from the API.
  }

  getItemFromPagination(e: any): void {
    this.paginationItem = e; // update the pagination item from the child element <li>
    this.getData(e);
  }

  getData(page: number): void {
    this._fetchDataService.fetchData(page).subscribe((data: any) => {
      this.results = data.results;
      console.log(this.results);
    });

  }
}
