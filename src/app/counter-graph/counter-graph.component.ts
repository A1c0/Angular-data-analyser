import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-graph',
  templateUrl: './counter-graph.component.html',
  styleUrls: ['./counter-graph.component.css']
})
export class CounterGraphComponent implements OnInit {
  private graph = {
    data: [{
      values: [1, 1],
      labels: ['Dogs VS cats', 'Mnist'],
      type: 'pie'
    }],
    layout: {width: 700, height: 500, title: 'Quel méthode préferé vous ?'}
  };

  constructor() {
    const methodCatsVsDogsCounter = Number(localStorage.getItem('CatsVsDogsCounter')) || 0;
    const methodMintsCounter = Number(localStorage.getItem('mintsCounter')) || 0;

    this.graph.data[0].values = [methodCatsVsDogsCounter, methodMintsCounter];
  }


  ngOnInit() {
  }

}
