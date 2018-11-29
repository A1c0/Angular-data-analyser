import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private methodCatsVsDogsCounter;
  private methodMintsCounter;
  private alertName;

  constructor(private route: ActivatedRoute) {
    this.methodCatsVsDogsCounter = Number(localStorage.getItem('CatsVsDogsCounter')) || 0;
    this.methodMintsCounter = Number(localStorage.getItem('MnitsCounter')) || 0;
  }

  ngOnInit() {
    this.alertName = this.route.snapshot.queryParams.alertName;
  }

  useMethodCatsVsDogsCounter() {
    this.methodCatsVsDogsCounter++;
    localStorage.setItem('CatsVsDogsCounter', String(this.methodCatsVsDogsCounter));
  }

  useMethodMintsCounter() {
    this.methodMintsCounter++;
    localStorage.setItem('MnitsCounter', String(this.methodMintsCounter));
  }
}
