export class PredictService {

  result = [];

  predict() {

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
    console.log(this.result);
  }
}
