# JokeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 1. Steps by Step

1. Instalalar `Poppers.js` para los componentes de JavaScript

```bash
$ npm install bootstrap @popperjs/core
```

2. Agregar bootstrap al proyecto de Angular, para lo incluya en el la `compilacion`

- Encuentra el archivo `angular.json` y realiza los ajustes pertinentes

```json
"styles": [
  "src/styles.css"
],
"scripts": []


```

Realiza la configuracion pertinente

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css", // incorpora los archivos minificados en la compilacion de Angular tanto para javascritp y los estilos css.
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]


```

## Content Projection


## Helpful tools

1.  Comando para limpiar el cache de Angular.

```bash
$ ng cache clean
```
