export class LazySeq {
  private generator;
  private cache;
  private done;
  private set;

  constructor(generator, initArgs: any[] = []) {
    this.generator = generator.apply(null, initArgs);
    this.cache = [];
    this.set = new Set<any>();
    this.done = false;
  }

  private step() {
    const { value, done } = this.generator.next();
    if (done) {
      this.done = true;
      return;
    }
    this.cache.push(value);
    this.set.add(value)
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

  find = (predicate) => {
    let val;
    for (let i = 0, val = this.nth(i); !predicate(val); i++) {
      val = this.nth(i);
    }
    return val;
  }

  findIndex = (predicate) => {
    let i, val;
    for (i = 0, val = this.nth(i); !predicate(val); i++) {
      val = this.nth(i);
    }
    return i - 1;
  }

  has = (x: any) => {
    return this.set.has(x);
  }
}