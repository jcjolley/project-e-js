import { performance } from 'perf_hooks';
import { primes } from './primes';
import { sum } from 'lodash/fp';

export const pTen = () => {
  const t0 = performance.now()
  const x = sum(primes.takeWhile(p => p < 2000000));
  const t1 = performance.now()

  console.log(`10. Result: ${x} Time: ${Math.round(t1 - t0)}ms`);
}