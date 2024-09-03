import { Component, Input } from '@angular/core';
import Joke from '../../models/domain/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
  @Input('joke') joke: Joke | undefined;

}
