import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidenciaComponent as IncidenciaComponentTD } from './Projecte/Components/Incidencia/TemplateDriven/incidencia.component';
import { IncidenciaComponent as IncidenciaComponentRF } from './Projecte/Components/Incidencia/ReactiveForms/incidencia.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidenciaComponentTD,
    IncidenciaComponentRF
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
