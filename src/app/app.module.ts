import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TemaComponent } from './tema/tema.component';
import { NewTemaComponent } from './new-tema/new-tema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewOptionsComponent } from './new-options/new-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TemaComponent,
    NewTemaComponent,
    NewQuestionComponent,
    NewOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
