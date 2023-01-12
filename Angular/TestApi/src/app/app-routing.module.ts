import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactComponent } from './Projecte/Components/fact/fact.component';
import { UserComponent } from './Projecte/Components/user/user.component';

const routes: Routes = [
  {
    path: 'fact',
    component: FactComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
