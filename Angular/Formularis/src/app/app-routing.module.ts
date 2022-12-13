import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaComponent as IncidenciaComponentTD } from './Projecte/Components/Incidencia/TemplateDriven/incidencia.component';
import { IncidenciaComponent as IncidenciaComponentRF } from './Projecte/Components/Incidencia/ReactiveForms/incidencia.component';

const routes: Routes = [
  {
    path: 'incidenciaTD',
    component: IncidenciaComponentTD
  },
  {
    path: 'incidenciaRF',
    component: IncidenciaComponentRF
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
