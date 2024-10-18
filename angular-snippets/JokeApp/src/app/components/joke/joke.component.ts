import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import Joke from '../../models/domain/joke.model';

// Si nosotros escribimos la plantilla enbedio dentro de este controller ya no tendira vista, la plantilla haria de cuenta como vista.
// Depth learning of @Component decoratos and configuration properties.
/**
 * templateUrl: Esta propieades permite referenciar un plantilla HTML externa que sirve de vista para este controlador.
 *              Apuntamos con esta propiedad un archivo HTML que contiene la vista. Es solo un 'string'
 * styles: Esta propiedad toma un 'array' de estilos en forma de 'template strings', los cuales estan vinculados
            con la vista que se apunto en la propiedad de 'templateUrl'.
            Cada item en el array contiene string, y cada string contien cualquier numero de 'estilos'
 * View Encapsulation: Esa una propiedad exclusiva de angular que nos permite, encpsular la vista, de manera
                        permite agregar estios a los componentes sin que estos estilos se filtren del 'scope' del componete.
 *    encapsulation: Esta propiedad nos permite encapsular las vista o 'estilos' del componente.
        1. ViewEncapsulation.ShadowDom: Esto permite que el el componente tenga una encapsulacion fuerte, es decir cualquier estilo que definamos en este componente no seran aplicados a otros componentes.
        2. ViewEncapsulation.Emulated: Este es el comportamiento que vemos por defecto.
        3. ViewEncapsulation.None: No aplica encapusulacion en la vista de componente
 * stylesUrls:

  *
 */
@Component({
  selector: 'app-joke',
  // template: '<h1> This is the    Joke Component </h1>',
  templateUrl: './joke.component.html',
  styles: [
    `
      .card {
        color: #eef7ff;
      }
    `,
  ],
  // styleUrl: './joke.component.scss',
  styleUrls: ['./joke.component.scss', './joke.custom.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // for default,
  viewProviders: [
    // EmailService,
  ]
})
/**
 * This is the controller for the Joke component
 * This is used to link the view with the controller
 */
export class JokeComponent {
  setup: string | undefined;
  puchline: string | undefined;

  // Input property bindig or this is the property for this class that will bind to the view.
  @Input() item: Joke = new Joke('', '', false);

  @Output() removeJoke = new EventEmitter<Joke>();
  @Output() updateJoke = new EventEmitter<Joke>();

  @Input('index') index: number = 0;


  // constructor() {
  //   this.setup = 'Cual es la rata mas grande del mundo ? ';
  //   this.puchline = 'La rata de 2 patas';
  // }

  ngOnInit(): void {
    // this method is called uniquely when the component has been initialized
    // This is the correct form to inizialize 'properties' en Angular
    this.setup = 'Cual es la rata mas grande de todo el mundo ? ';
    this.puchline = 'La rata de 2 patas';
  }

  showPropertiesInUpperCase(): any {
    return this.setup?.toUpperCase() + ' ' + this.puchline?.toUpperCase();
  }

  toggle(joke: Joke): void {
    window.alert('The value is: ' + joke);
    // Here the logic to control the value of the property
    joke.hidden = !joke.hidden;
  }

  // Delete Joke controller
  deleteJoke(): void {
    // Here we need to emit the jokes with values
    this.removeJoke.emit(this.item);
  }

  // Update Joke controller
  editJoke(): void {
    // TODO: Implement this funcionality with improving the UI/UX components after
  }

  // Life-cycle methods for this component

  constructor() {
    console.log('The component ha bee created successfully');
  } // invoques when the component is created}

  ngOnChanges(changes: any): void {
    // invoqued when something changes in it's input properties. important
    console.log('Something changed in the input properties like: ' + this.item);
    console.log('The changes is: ' + JSON.stringify(changes));
  }

  ngDoCheck(): void {
    // no deben estar juntos con el 'ngOnChanges'
    // Est es invocado cunado el detector de cambios de un component dado es llamdo o invocado.
    // Permite cambiar el 'detector de cambios' con algoritomos propios para controllar el componente.
    console.log('Something was checked in this component: ');
  }

  ngOnDestroy(): void {
    // Este metodo sera ejecutado justo antes de que el componente sea eleminado.
    // Se usa para la limpiza, para 'desuscrivirse' a un observable, handlres y filtros de memoria.
    console.log('This componente has been destroyed successfuly!');
  }
}
