import { performance } from 'perf_hooks';
import { range } from 'lodash/fp';

export const pOne = () => {
  const t0 = performance.now();
  const x = range(0, 1000)
    .filter(x => [3, 5].some(y => x % y === 0))
    .reduce((acc, x) => acc + x);
  const t1 = performance.now();

  console.log(`1. Result: ${x}, Time: ${Math.round(t1 - t0)}ms`);
  // => 233168
}