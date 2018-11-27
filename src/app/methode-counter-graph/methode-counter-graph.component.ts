import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-methode-counter-graph',
  templateUrl: './methode-counter-graph.component.html',
  styleUrls: ['./methode-counter-graph.component.css']
})
export class MethodeCounterGraphComponent implements OnInit {

  constructor() {
  }

  public graph = {
    data: [{
      values: [19, 26],
      labels: ['Dogs VS cats', 'Mnist'],
      type: 'pie'
    }],
    layout: {width: 700, height: 500, title: 'Quel méthode préferé vous ?'}
  };

  ngOnInit() {
  }

}
