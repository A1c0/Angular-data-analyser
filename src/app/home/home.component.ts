import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private methodCatsVsDogsCounter;
  private methodMintsCounter;

  constructor() {
    this.methodCatsVsDogsCounter = Number(localStorage.getItem('CatsVsDogsCounter')) || 0;
    this.methodMintsCounter = Number(localStorage.getItem('mintsCounter')) || 0;
  }

  ngOnInit() {
  }

  useMethodCatsVsDogsCounter() {
    this.methodCatsVsDogsCounter++;
    localStorage.setItem('CatsVsDogsCounter', String(this.methodCatsVsDogsCounter));
  }

  useMethodMintsCounter() {
    this.methodMintsCounter++;
    localStorage.setItem('mintsCounter', String(this.methodMintsCounter));
  }
}
