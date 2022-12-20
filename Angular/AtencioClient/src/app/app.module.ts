import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCriteriaComponent } from './Projecte/Components/form-criteria/form-criteria.component';
import { MainFormComponent } from './Projecte/Components/main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCriteriaComponent,
    MainFormComponent
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
