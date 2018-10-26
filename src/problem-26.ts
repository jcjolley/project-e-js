import { first, range } from 'lodash/fp';
import { performance } from 'perf_hooks';
import { round } from './round';

export const doProblem = () => {

  const nthFractionPart = (n, precision) => {
    let result: number[] = [];
    let x = 10;
    for (let i = 0; i < precision; i++) {
      result.push(Math.floor(x / n))
      x = (x % n) * 10
    }
    return result;
  }

  // Skips cycles of length 1
  const findCycle = n => {
    const str = nthFractionPart(n, 10000).join('');
    for (let i = 2; i < 5000; i++) {
      const pcycle = str.slice(0, i);
      if (pcycle === str.slice(i, i + pcycle.length)) {
        return [n, pcycle.length]
      }
    }
    return [n, 0];
  }

  const t0 = performance.now();
  const x = first(range(0, 1000).map(findCycle).sort(([n, l], [n2, l2]) => l2 - l))
  const t1 = performance.now();

  console.log(`26. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}