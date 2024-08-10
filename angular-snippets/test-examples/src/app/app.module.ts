import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './components/timer/timer.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SnippetComponent,
    FormComponent,
    TimerComponent,
    TimerListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
