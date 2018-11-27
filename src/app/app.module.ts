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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
