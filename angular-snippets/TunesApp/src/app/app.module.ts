import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import SearchService from './services/search-term.service';
import { ListItemsComponent } from './components/list-items/list-items.component';
@NgModule({
  declarations: [AppComponent, SearchFieldComponent, HomeComponent, ListItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // import this service to use (Http cliend) in anywhere.
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
