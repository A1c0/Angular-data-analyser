import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MnistComponent} from './mnists/mnist/mnist.component';
import {CounterGraphComponent} from './counter-graph/counter-graph.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthGuardService} from './services/auth-guard.service';
import {DogsCatsComponent} from './dogs-cats/dogs-cats.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'mnist', canActivate: [AuthGuardService], component: MnistComponent},
  {path: 'method_graph', canActivate: [AuthGuardService], component: CounterGraphComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dogs_cats', canActivate: [AuthGuardService], component: DogsCatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
