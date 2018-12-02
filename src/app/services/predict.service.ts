import * as tf from '@tensorflow/tfjs';

export class PredictService {

  result = [];
  private elementToPreduct = null;

  private model = null;

  private type: string;

  async loadModel() {
    this.model = await tf.loadModel('../../assets/model/tfjs-mnist-mobilenet/model.json');
    console.log('model loaded !');
  }

  preprocessImage(image) {
    const tensor = tf.fromPixels(image)
      .resizeNearestNeighbor([128, 128])
      .toFloat();

    const offset = tf.scalar(128);
    return tensor.sub(offset)
      .div(offset)
      .expandDims();
  }

  async predict() {
    if (this.type !== 'img' && this.type !== 'canvas') {
      await this.loadModel();
      const image = this.elementToPreduct;
      console.log(this.model);
      console.log('image:');
      console.log(image);
      const tensor = this.preprocessImage(image);

      const predictions = await this.model.predict(tensor).data();
      const results = Array.from(predictions)
        .map((p, i) => {
          return {
            probability: p,
            className: i
          };
        }).sort((a, b) => {
          // @ts-ignore
          return b.probability - a.probability;
        }).slice(0, 5);
      console.log(results);
    } else {
      console.log('The implementation of the mnist prediction does not work ' +
        'yet, so the value indicated in the graph is totally random.');
      const a = Math.floor(Math.random() * 10);
      let b;
      do {
        b = Math.floor(Math.random() * 10);
      } while (b === a);
      let c;
      do {
        c = Math.floor(Math.random() * 10);
      } while (c === a || c === b);

      const aPercent = Math.floor(Math.random() * 100);
      const bPercent = Math.floor(Math.random() * (100 - aPercent));
      const cPercent = 100 - aPercent - bPercent;

      this.result[0] = [a, aPercent];
      this.result[1] = [b, bPercent];
      this.result[2] = [c, cPercent];
    }
  }

  public setElementToPreduct(value, type) {
    console.log('change value:');
    console.log(value);
    this.elementToPreduct = value;
    this.type = type;
  }
}
