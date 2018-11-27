import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MnistComponent } from './mnists/mnist/mnist.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'mnist', component: MnistComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
