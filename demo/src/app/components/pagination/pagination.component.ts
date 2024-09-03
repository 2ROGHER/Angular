import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Output() handlePaginationItem: EventEmitter<any> = new EventEmitter<any>();

  @Input() quantity: Object[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];


  sendItemId(e: any): void {
    // Con esto se establece una comumicacion unidericcional entre el padre y el hijo mediante eventos
    this.handlePaginationItem.emit(e.srcElement.id as number );
  }
}
