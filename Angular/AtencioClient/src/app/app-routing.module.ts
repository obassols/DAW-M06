import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCriteriaComponent } from './Projecte/Components/form-criteria/form-criteria.component';
import { MainFormComponent } from './Projecte/Components/main-form/main-form.component';

const routes: Routes = [
  {
    path: 'addCriteria',
    component: FormCriteriaComponent
  },
  {
    path: 'mainForm',
    component: MainFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
