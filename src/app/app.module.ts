import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './auth/login/login.component';
import { StatsComponent } from './stats/stats.component';
import { AuthService } from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { MnistComponent } from './mnist/mnist.component';
import { MnistDrawComponent } from './mnist-draw/mnist-draw.component';
import { MnistImageComponent } from './mnist-image/mnist-image.component';
import { MnistGraphComponent } from './mnist-graph/mnist-graph.component';
import { SignupComponent } from './auth/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { MnistComponent } from './mnists/mnist/mnist.component';
import { MnistImageComponent } from './mnists/mnist-image/mnist-image.component';
import { MnistGraphComponent } from './mnists/mnist-graph/mnist-graph.component';
import { CanvasComponent } from './mnists/canvas/canvas.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

import { CounterGraphComponent } from './counter-graph/counter-graph.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    MnistComponent,
    MnistImageComponent,
    MnistGraphComponent,
    SignupComponent,
    CanvasComponent,
    CounterGraphComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    PlotlyModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
