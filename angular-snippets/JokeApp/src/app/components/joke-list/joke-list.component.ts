import { Component, Input } from '@angular/core';
import Joke from '../../models/domain/joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss'
})
export class JokeListComponent {
  @Input() jokeList: Joke[] | undefined;

}
