import { performance } from 'perf_hooks';
import { round } from './round';
import { range } from "lodash/fp";

export const doProblem = () => {

  const evenlyDivisibleBy = (n: number, xs: number[]) => {
    return xs.every(x => n % x === 0);
  }

  const findEvenlyDivisibleByOneThroughTwenty = () => {
    let n = 40;
    let divisors = range(2, 21);
    while (!evenlyDivisibleBy(n, divisors)) {
      n += 20;
    }
    return n;
  }

  const t0 = performance.now()
  const x = findEvenlyDivisibleByOneThroughTwenty()
  const t1 = performance.now()

  console.log(`5. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}