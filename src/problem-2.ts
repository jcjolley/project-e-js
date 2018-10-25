import { performance } from 'perf_hooks';
import { round } from './round';
import { fibonacci } from './fibonacci';
export const doProblem = () => {

  const t0 = performance.now();
  const x = fibonacci.takeWhile(x => x < 4000000)
    .filter(x => x % 2 === 0)
    .reduce((acc, x) => acc + x);
  const t1 = performance.now();

  console.log(`2. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}