import {Component, OnInit, ViewChild} from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-dogs-cats',
  templateUrl: './dogs-cats.component.html',
  styleUrls: ['./dogs-cats.component.css']
})
export class DogsCatsComponent implements OnInit {

  pet = 'Quel est donc cet animal ?';
  dog = 0;
  cat = 0;
  randomImageNumber = '../../assets/dataSets/catsVsDogs/test_img_10.jpg';

  model = null;
  modelName: string = null;

  constructor() {
  }

  ngOnInit() {
  }

  randomPic() {
    const imageNB = Math.floor(Math.random() * 411);
    const str1 = '../../assets/dataSets/catsVsDogs/test_img_';
    const str2 = '.jpg';
    this.randomImageNumber = str1.concat(imageNB.toString()).concat(str2);
  }

  async loadCurrentModel(choose_model: HTMLSelectElement) {
    this.modelName = choose_model.value;
    if (this.modelName === '') {
      return;
    }
    this.model = await tf.loadModel('../../assets/model/tfjs-models-' + this.modelName + '/model.json');
    console.log(`this.modelName: ${this.modelName}`);
    console.log('model loaded !');
  }

  async predict() {
    if (this.model === null) {
      console.log('Please load the model first..');
    }

    const image = document.getElementById('image_to_predict');
    const tensor = this.preprocessImage(image, this.modelName);

    const predictions = await this.model.predict(tensor).data();
    const results = Array.from(predictions)
      .map((p, i) => {
        return {
          probability: p,
          className: ['Chat', 'Chien'][i]
        };
      }).sort((a, b) => {
        // @ts-ignore
        return b.probability - a.probability;
      }).slice(0, 5);
    console.log(results);

    if (results[0].className === 'Chat') {
      this.cat = Number(results[0].probability);
      this.dog = Number(results[1].probability);
    } else {
      this.cat = Number(results[1].probability);
      this.dog = Number(results[0].probability);
    }
  }

  preprocessImage(image, modelName) {
    const tensor = tf.fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .toFloat();

    if (modelName === undefined) {
      return tensor.expandDims();
    } else if (modelName === 'mobilenet') {
      const offset = tf.scalar(127.5);
      return tensor.sub(offset)
        .div(offset)
        .expandDims();
    } else if (modelName === 'resnet50') {
      const offset = tf.scalar(127.5);
      return tensor.sub(offset)
        .div(offset)
        .expandDims();

    } else {
      console.log('Unknown model name..');
    }
  }
}
