import { performance } from 'perf_hooks';
import { round } from './round';
import { sum } from "lodash/fp";

export const pNine = () => {
  const isPythagoreanTriplet = (a: number, b: number, c: number) => {
    return (a * a) + (b * b) === (c * c);
  }

  const sumsTo = (xs: number[], expectedSum) => {
    return sum(xs) === expectedSum;
  }

  const getPythagoreanTripletWithSum = (sum) => {
    for (let a = 1; a < 998; a++) {
      for (let b = a; b < 998; b++) {
        let c = 1000 - a - b;
        if (isPythagoreanTriplet(a, b, c)) {
          return a * b * c;
        }
      }
    }
  }

  const t0 = performance.now()
  const x = getPythagoreanTripletWithSum(100);
  const t1 = performance.now()
  console.log(`9. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}
