import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home/characters/:id',
    component: CharacterDetailComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch: 'prefix',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // This allow us to use the (#) location strategy for routes
  exports: [RouterModule],
})
export class AppRoutingModule {}
