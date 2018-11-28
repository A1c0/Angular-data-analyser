import {Component, OnInit} from '@angular/core';
import {PredictService} from '../../services/predict.service';

import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-mnist-graph',
  templateUrl: './mnist-graph.component.html',
  styleUrls: ['./mnist-graph.component.css']
})

export class MnistGraphComponent implements OnInit {

  public result: number;

  constructor(private predictService: PredictService) {
  }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 0, label: "0" },
          { y: 0, label: "1" },
          { y: 0, label: "2" },
          { y: 0, label: "3" },
          { y: 0, label: "4" },
          { y: 0, label: "5" },
          { y: 0, label: "6" },
          { y: 0, label: "7" },
          { y: 0, label: "8" },
          { y: 0, label: "9" }
        ]
      }]
    });

    chart.render();
  }

  onPredict() {
    this.predictService.predict();
    this.result = this.predictService.result;

    let result0 = 0, result1 = 0, result2 = 0, result3 = 0, result4 = 0,
      result5 = 0, result6 = 0, result7 = 0, result8 = 0, result9 = 0;

    switch (this.result) {
      case 0:
        result0 = 100;
        break;
      case 1:
        result1 = 100;
        break;
      case 2:
        result2 = 100;
        break;
      case 3:
        result3 = 100;
        break;
      case 4:
        result4 = 100;
        break;
      case 5:
        result5 = 100;
        break;
      case 6:
        result6 = 100;
        break;
      case 7:
        result7 = 100;
        break;
      case 8:
        result8 = 100;
        break;
      case 9:
        result9 = 100;
        break;
    }

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: result0, label: "0" },
          { y: result1, label: "1" },
          { y: result2, label: "2" },
          { y: result3, label: "3" },
          { y: result4, label: "4" },
          { y: result5, label: "5" },
          { y: result6, label: "6" },
          { y: result7, label: "7" },
          { y: result8, label: "8" },
          { y: result9, label: "9" }
        ]
      }]
    });

    chart.render();
  }
}
