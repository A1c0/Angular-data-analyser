import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
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
    CanvasComponent,
    CounterGraphComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlotlyModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
