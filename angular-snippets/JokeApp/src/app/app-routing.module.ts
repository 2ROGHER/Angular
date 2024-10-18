import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // This module is used to handle the SPAs router.
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokeDetailsComponent } from './components/joke-details/joke-details.component';
import AlwaysAuthGuard from './guards/can-activate.guard';
import OnlyLoggedInUsersGuard from './guards/only-loggedin-users.guard';
import AlwaysAuthChildrenGuard from './guards/can-activate-children.guard';

// This is the router component or Component Router
// This component is used to build SPAs

// This is technically called (router configuration)
const routes: Routes = [
  {
    // router redirects configuration
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // exactly path match
  },
  {
    // parameterised routes
    path: 'joke', // the full route will be ('joke/details/349823954281u5-34324298)
    component: JokeComponent,
    // router guarantees
    canActivate: [AlwaysAuthGuard],
    children: [
      {
        path: 'details/:id',
        component: JokeDetailsComponent,
        canActivateChild: [AlwaysAuthChildrenGuard], // here goes all children guard routes.
      },
    ],
  },
  {
    path: 'searh',
    component: InputSearchComponent,
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
  },

  {
    // podemos pasarle el termino de busqueda mediante la ruta, cosa que si se actualiza la pagina, se realizara la mismsa busqueda y nos llevara de vuelta a donde empezamos.
    path: 'find',
    redirectTo: 'search/:term', // this (property) is used to redirect the user to the router defined at (path property)
  },
  {
    path: 'home', // 'path' property describe the (URL) that (route) handles
    component: HomeComponent, // 'component' property is the component name that we want to render  when the URL matches in the browser
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: InputSearchComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
  {
    path: '**', // Not match any path
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // nosotros instalamos la (configuracion de la rutas) en nuestra aplicacion en este modulo
  exports: [RouterModule], // publish the module with other modules.
})
export class AppRoutingModule {}
