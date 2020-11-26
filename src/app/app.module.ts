import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { MateriaComponent } from './materia/materia.component';
import { HeaderComponent } from './header/header.component';
import { MateriaListComponent } from './materia/materia-list/materia-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    MateriaComponent,
    HeaderComponent,
    MateriaListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
