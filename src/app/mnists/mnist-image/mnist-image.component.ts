import {Component, OnInit} from '@angular/core';
import {PredictService} from '../../services/predict.service';

@Component({
  selector: 'app-mnist-image',
  templateUrl: './mnist-image.component.html',
  styleUrls: ['./mnist-image.component.css']
})
export class MnistImageComponent implements OnInit {

  public imagesList: Array<string> = [];

  constructor(private predictService: PredictService) {
  }

  ngOnInit() {
    for (let i = 0; i < 6; i++) {
      this.imagesList.push('../../../assets/dataSets/nothing.png');
    }
  }

  loadMorePic() {
    this.imagesList = this.imagesList.filter(x => false);
    for (let i = 0; i < 6; i++) {
      this.imagesList.push(`../../../assets/dataSets/mnist/${getRandomInt(1, 670)}.jpg`);
    }
    console.log(this.imagesList);
  }

  onFileSelected($event) {

  }

  onUpload() {

  }

  choose(id: number) {
    this.predictService.setElementToPreduct(document.getElementById(`img_mnist_${id}`), 'img');
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
