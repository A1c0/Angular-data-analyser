import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { MnistComponent } from './mnist/mnist.component';
import { MnistDrawComponent } from './mnist-draw/mnist-draw.component';
import { MnistImageComponent } from './mnist-image/mnist-image.component';
import { MnistGraphComponent } from './mnist-graph/mnist-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    addInputLogin
    StatsComponent,
    AlertsComponent
    MnistComponent,
    MnistDrawComponent,
    MnistImageComponent,
    MnistGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
