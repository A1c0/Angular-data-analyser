import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-data-analyser';
  constructor() {
    const config = {
      apiKey: 'AIzaSyBrWB9H2LY1Tsuo5zAlwfdGA2a4q-nvGdw',
      authDomain: 'angular-data-analyser.firebaseapp.com',
      databaseURL: 'https://angular-data-analyser.firebaseio.com',
      projectId: 'angular-data-analyser',
      storageBucket: 'angular-data-analyser.appspot.com',
      messagingSenderId: '174125751466'
    };
    firebase.initializeApp(config);
  }
}
