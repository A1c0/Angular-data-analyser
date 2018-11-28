import { Component, OnInit } from '@angular/core';
import {PredictService} from '../../services/predict.service';

@Component({
  selector: 'app-mnist-graph',
  templateUrl: './mnist-graph.component.html',
  styleUrls: ['./mnist-graph.component.css']
})
export class MnistGraphComponent implements OnInit {

  public result : number;

  constructor(private predictService: PredictService) { }

  ngOnInit() {  }

  onPredict() {
    this.predictService.predict();
    this.result = this.predictService.result;
  }
}
