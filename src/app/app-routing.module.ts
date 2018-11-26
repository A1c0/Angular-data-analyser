import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {StatsComponent} from './stats/stats.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
