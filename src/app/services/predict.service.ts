export class PredictService {
  result: number;

  predict() {
    this.result = Math.floor(Math.random() * 10);
  }
}
