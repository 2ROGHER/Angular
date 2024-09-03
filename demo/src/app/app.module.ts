import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FilterBarComponent } from './layouts/filter-bar/filter-bar.component';
import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { MainContentComponent } from './layouts/main-content/main-content.component';
import { LogoComponent } from './components/logo/logo.component';
import { PillComponent } from './components/pill/pill.component';
import { DropdownMenuComponent } from './components/drop-down-menu/dropdown-menu/dropdown-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/drop-down-menu/select/select.component';
import { ItemComponent } from './components/drop-down-menu/item/item.component';
import { MenuComponent } from './components/drop-down-menu/menu/menu.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ExtractLastItemPipe } from './pipes/extract-last-item.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CharacterDetailComponent,
    CharacterComponent,
    CharacterListComponent,
    NavBarComponent,
    FilterBarComponent,
    SearchBarComponent,
    MainContentComponent,
    LogoComponent,
    PillComponent,
    DropdownMenuComponent,
    SelectComponent,
    ItemComponent,
    MenuComponent,
    PaginationComponent,
    ExtractLastItemPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
