import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MnistComponent} from './mnists/mnist/mnist.component';
import {MethodeCounterGraphComponent} from './methode-counter-graph/methode-counter-graph.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'mnist', component: MnistComponent},
  {path: 'method_graph', component: MethodeCounterGraphComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
