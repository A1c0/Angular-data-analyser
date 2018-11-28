export class PredictService {
  result = [];

  predict() {
    for (let i = 0; i < 10; i++) {
      this.result.push(Math.floor(Math.random() * 10));
    }
  }
}
