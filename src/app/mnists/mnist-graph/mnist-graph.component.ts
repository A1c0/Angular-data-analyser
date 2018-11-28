import {Component, OnInit} from '@angular/core';
import {PredictService} from '../../services/predict.service';

@Component({
  selector: 'app-mnist-graph',
  templateUrl: './mnist-graph.component.html',
  styleUrls: ['./mnist-graph.component.css']
})
export class MnistGraphComponent implements OnInit {

  public result: Array<number>;
  private data = [{
    type: 'bar',
    x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    y: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    orientation: 'h'
  }];

  constructor(private predictService: PredictService) {
  }

  ngOnInit() {
  }

  onPredict() {
    this.predictService.predict();
    this.data[0].x = this.predictService.result;
    console.log(this.result);
  }
}
