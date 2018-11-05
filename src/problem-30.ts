import { range, sum } from 'lodash/fp';
import { performance } from 'perf_hooks';
import { round } from './round';
import { toDigits } from './general-utils';
export const doProblem = () => {

  const to5th = x => Math.pow(x, 5);
  const sumDigitsTo5th = x => toDigits(x).map(to5th).reduce((sum, y) => sum + y);
  const findLimit = (x = 1) => {
    if (x > x.toString().length * to5th(9)) {
      return x;
    }
    return findLimit(x * 10);
  }

  const t0 = performance.now();
  const results = sum(range(2, findLimit()).filter(x => x === sumDigitsTo5th(x)));
  const x = results;
  const t1 = performance.now();

  console.log(`30. Result: ${JSON.stringify(x)} Time: ${round(t1 - t0, 2)}ms`);
}
