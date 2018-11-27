import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { StatsComponent } from './stats/stats.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';

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
    MnistImageComponent,
    MnistGraphComponent,
    CanvasComponent,
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
