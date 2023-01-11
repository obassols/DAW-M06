import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactComponent } from './Projecte/Components/fact/fact.component';

const routes: Routes = [
  {
    path: 'fact',
    component: FactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
