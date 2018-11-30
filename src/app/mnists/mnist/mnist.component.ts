import {Component, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-mnist',
  templateUrl: './mnist.component.html',
  styleUrls: ['./mnist.component.css']
})
export class MnistComponent implements OnInit {
  private model = null;

  constructor() {
  }

  ngOnInit() {
    this.model = tf.loadModel('../../assets/model/tfjs-mnist-mobilenet/model.json');
  }

}
