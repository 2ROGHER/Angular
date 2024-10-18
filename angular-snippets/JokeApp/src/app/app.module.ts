import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeFormComponent } from './forms/joke-form/joke-form.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { FormAppComponent } from './forms/form-app/form-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelFormComponent } from './forms/model-form/model-form.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ReactiveModelFormComponent } from './forms/reactive-model-form/reactive-model-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { OtherService, SimpleService } from './providers';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SimpleService as Service } from './providers';

// Import HTTP client
import { HttpClient } from '@angular/common/http'; //this is for setuping the (dependency injection)
// Sin embargo existe unaforma mas util y efectiva de poder usar las dependencies para el HTTP
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './components/http/http.component';
import { HeaderComponent } from './layouts/header/header.component';
import { JokeDetailsComponent } from './components/joke-details/joke-details.component';
import AlwaysAuthGuard from './guards/can-activate.guard';
import OnlyLoggedInUsersGuard from './guards/only-loggedin-users.guard';
import AlwaysAuthChildrenGuard from './guards/can-activate-children.guard';
/**
 * Common modules to use here is: HttpModule, BrowserModule, RouterModule
 * HttpModule: to make HTTP requests
 * FormsModule: to make dynamic forms
 * RouterModule: to load routes and views in out app
 */
@NgModule({
  declarations: [
    // We need to declare the components, directives that are going to used here.
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    FormAppComponent,
    ModelFormComponent,
    InputSearchComponent,
    ReactiveModelFormComponent,
    TemplateFormComponent,
    ParentComponent,
    ChildComponent,
    HttpComponent,
    HeaderComponent,
    JokeDetailsComponent,
  ],
  imports: [
    // Here we declare all modules by thirds that we need for our module to works.
    // "BrowserModule" contains all directives that we are going to use her. They are included en "CommonMudule"
    BrowserModule, // This is the main module a lest to be used in any angular applications
    AppRoutingModule, // imports the component Router here.
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    SimpleService,
    OtherService,
    Service,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
    AlwaysAuthChildrenGuard
  ], // This accepts a list of providers equals to ReflectiveInjector.resolveAndCreate() methods
  bootstrap: [AppComponent], // This means that the bootstrap for the app is the AppComponent.
})
// Thi is the mian entry module. Each applicaction must have a few a module to works.
export class AppModule {}

// @NgModule({
//   declarations: [],
//   imports: [],
//   providers: [],
//   bootstrap: [],
// })

// export class OtherModule {}
