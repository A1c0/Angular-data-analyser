import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    StatsComponent,
    AlertsComponent,
    MnistComponent,
    MnistDrawComponent,
    MnistImageComponent,
    MnistGraphComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
