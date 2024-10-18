import { Component, EventEmitter, Output } from '@angular/core';
import Joke from '../../models/domain/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrl: './joke-form.component.scss'
})
export class JokeFormComponent {
  // To create the 'output event binding' we need to do two things:
  // 1. We need to create an event Emitter. in this class component
  // 2. Simila whe we create the 'input property binding' we need to decorate this 'property' with
  // @Output: this means that this property will be binded to a event en the vieww.

  // This is a helper class that is necessary to emit events when something happens.
  @Output() jokeCreated = new EventEmitter<Joke>(); // This means that when the event is emitted, this is
  // is controlled by the 'jokeCreated' property and the event is sent. The event's type sent is an istance of Joke class.

  createJoke(setup: string, punchline: string): void {
    window.alert("Joke  was created successfully!");
    // this.jokeCreated.emit(new Joke("A setup input", "A punchline input", true));
    this.jokeCreated.emit(new Joke(setup, punchline, true));
  }

}
