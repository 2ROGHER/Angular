import { Component, Input } from '@angular/core';
import Timer
 from '../../models/domain/watcher.model';
@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrl: './timer-list.component.scss'
})

export class TimerListComponent {
  @Input() data: Timer[] = [];

  ngOnInit(): void {
    console.log("Component mounted in the DOM");
    console.log(this.data);
  }

}
