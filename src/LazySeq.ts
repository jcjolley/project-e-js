export class LazySeq {
  private generator;
  private cache;
  private done;

  constructor(generator) {
    this.generator = generator();
    this.cache = [];
    this.done = false;
  }

  private step() {
    const { value, done } = this.generator.next();
    if (done) {
      this.done = true;
      return;
    }
    this.cache.push(value);
  }

  nth = (n: number) => {
    while (!this.done && this.cache.length < n + 1) {
      this.step();
    }
    return this.cache[n];
  }

  take = (n: number) => {
    while (!this.done && this.cache.length < n + 1) {
      this.step();
    }
    return this.cache.slice(0, n);
  }

  takeWhile = (callback) => {
    let i = 0;
    const res: any[] = [];
    let val = this.nth(i);
    while (callback(val)) {
      res.push(val);
      val = this.nth(++i)
    }
    return res;
  }
}