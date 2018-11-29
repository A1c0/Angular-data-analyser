import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './services/auth-guard.service';
import { MnistComponent } from './mnists/mnist/mnist.component';
import { MnistImageComponent } from './mnists/mnist-image/mnist-image.component';
import { MnistGraphComponent } from './mnists/mnist-graph/mnist-graph.component';
import { CanvasComponent } from './mnists/canvas/canvas.component';
import { AuthService } from './services/auth.service';

import { CounterGraphComponent } from './counter-graph/counter-graph.component';
import { HomeComponent } from './home/home.component';
import {CommunicationService} from './services/communication.service';
import { AlertComponent } from './alert/alert.component';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PredictService} from './services/predict.service';

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
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PlotlyModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PredictService,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
