import { performance } from 'perf_hooks';
import { range } from "lodash/fp";

export const pFive = () => {

  const evenlyDivisibleBy = (n: number, xs: number[]) => {
    return xs.every(x => n % x === 0);
  }

  const findEvenlyDivisibleByOneThroughTwenty = () => {
    let n = 20;
    let divisors = range(2, 21);
    while (!evenlyDivisibleBy(n, divisors)) {
      n++;
    }
    return n;
  }

  const t0 = performance.now()
  const x = findEvenlyDivisibleByOneThroughTwenty()
  const t1 = performance.now()

  console.log(`5. Result: ${x} Time: ${Math.round(t1 - t0)}ms`);

}