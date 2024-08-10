import { Component, Input } from '@angular/core';
import Timer from '../../models/domain/watcher.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  @Input('timer') timer: Timer = new Timer(0, 0, 0);

}
