import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MnistComponent } from './mnists/mnist/mnist.component';
import { MethodeCounterGraphComponent } from './methode-counter-graph/methode-counter-graph.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mnist', component: MnistComponent},
  {path: 'method_graph', component: MethodeCounterGraphComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
