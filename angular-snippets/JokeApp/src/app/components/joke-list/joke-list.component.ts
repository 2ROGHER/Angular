import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
// import the data
import { jokes, jokesArray } from '../../mooks/data';
import Joke from '../../models/domain/joke.model';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss',
})
export class JokeListComponent implements OnInit, AfterViewInit {
  jokes: any = [...jokes];
  dataWithModels: any = [...jokesArray];
  name: string = 'joke-list comonent';

  // Implemetation the interface method here.
  ngOnInit(): void {
    console.log('The JokeListComponent has been initialized correctly!');
  }

  addJoke(e: Joke): void {
    window.alert('Adding joke to list' + JSON.stringify(e));
    console.log('Value of the e: ' + JSON.stringify(e));
    this.dataWithModels.unshift(e); // Firts method to add in the array
    // this.dataWithModels = [e, ...jokes]; // Second method to add in the array
  }

  // Delete joke
  deleteJoke(e: Joke): void {
    console.log('The event is' + e);
    window.alert('The Joke was deleted successfully!');
    this.dataWithModels = [
      ...this.dataWithModels.filter((j: Joke) => j.punchline !== e.punchline),
    ];
  }

  // Edith joke
  editJoke(e: Joke): void {
    // TODO: Implement this method to edit a determinate Joke.
  }

  // Implementing the ViewChild as Annotations
  /**
   * Con esto lo que estamos haciendo es almacenar una 'referencia' su 'componente hijo' directo 'JokeComponent'
   * en una propiedad llamada 'jokeViewChild'

   * 'jokeViewChild' no es una insancia de la clase Joke class, esta es una instancia real su componente hijo JokeComponent.
     el cual existe dentro como des su componente padre como 'una vista'
   *
   * El decorador le dice a Angular como encontrar este componente hijo, al cual hemos vinculado en esta propieadad llamado 'jokeChildView'
   * Esto significa que dentro de "JokeListComponent" se buscara el componente vinculado con el decorador.
   */

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent | undefined; // This is a new property.
  // Tenemos que implementar la interfaz para vincular el ciclo de vida, cuando un componente hijo 'jokeChildView'
  // se termine de crear.

  // Otra alternativa para el caso que se tenga muchos componentes hijos es el uso de @ViewChildren para referencias a una lista de componentes hijos.
  @ViewChildren(JokeComponent) jokeViewChildren:
    | QueryList<JokeComponent>
    | undefined;

  // Otra alternativa para este caso de 'ViewChild' es que podemos vincular esta propiedad a traves de
  // 'template references variables' mandando como argumento el 'template' en el decorador
  @ViewChild('header') headerElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    // Todo se ejecuta cuando su componente hijo del "JokeListComponente" es creado
    console.log('The child component has been instantiated correctly');
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    // haciendo uso de viewChildren
    let jokeList: JokeComponent[] | undefined =
      this.jokeViewChildren?.toArray();
    console.log(
      `All JokeComponents as children of it's parent component JokeListComponent ${jokeList}`
    );

    // references with 'template references variable'
    console.log(`ngAfterViewInit -- headerElement is ${this.headerElement}`);
    let e = this.headerElement?.nativeElement as HTMLElement;
    e.textContent = 'Best Joke Machine';
  }

  // Some styles setup
  getStyles(): any {
    return {
      background: '#8eebee',
      color: '#999',
      fontSize: '3rem',
    };
  }
}
