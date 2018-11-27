import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private methodCatsVsDogsCounter = 0;
  private methodMintsCounter = 0;

  constructor() {
  }

  ngOnInit() {
  }

  useMethodCatsVsDogsCounter() {
    this.methodCatsVsDogsCounter++;
    console.log(`methodCatsVsDogsCounter: ${this.methodCatsVsDogsCounter}`);
  }

  useMethodMintsCounter() {
    this.methodMintsCounter++;
    console.log(`methodMintsCounter: ${this.methodMintsCounter}`);
  }
}
