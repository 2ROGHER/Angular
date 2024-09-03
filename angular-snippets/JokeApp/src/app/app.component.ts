import { Component } from '@angular/core';
import Joke from './models/domain/joke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'JokeApp';

  data: Joke[] = [
    new Joke('What does an dog with his tail ? ', 'Nothing!'),
    new Joke('What does an dog with his tail ? ', 'Everithing!'),
    new Joke('What does an dog with his tail ? ', 'I am not very sure!'),
  ];
}
