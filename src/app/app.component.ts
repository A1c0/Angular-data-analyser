import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {CommunicationService} from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-data-analyser';
  typeAlerting: String;
  isAlerting: Boolean;
  constructor(private communicationService: CommunicationService) {
    const config = {
      apiKey: 'AIzaSyBrWB9H2LY1Tsuo5zAlwfdGA2a4q-nvGdw',
      authDomain: 'angular-data-analyser.firebaseapp.com',
      databaseURL: 'https://angular-data-analyser.firebaseio.com',
      projectId: 'angular-data-analyser',
      storageBucket: 'angular-data-analyser.appspot.com',
      messagingSenderId: '174125751466'
    };
    firebase.initializeApp(config);

    communicationService.changeEmitted$.subscribe(data => {
      this.isAlerting = true;
      this.typeAlerting = data;
    });
  }
}
