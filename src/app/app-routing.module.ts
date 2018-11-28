import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MnistComponent} from './mnist/mnist.component';
import {StatsComponent} from './stats/stats.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'stats', canActivate: [AuthGuardService], component: StatsComponent},
  {path: 'mnist', component: MnistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
