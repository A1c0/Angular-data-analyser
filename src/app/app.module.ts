import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
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
    MnistComponent,
    MnistDrawComponent,
    MnistImageComponent,
    MnistGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
