import { performance } from 'perf_hooks';
import { round } from './round';
import { primes } from './primes'
export const pSeven = () => {
  const t0 = performance.now()
  const x = primes.nth(10000) // 0 based
  const t1 = performance.now()

  console.log(`7. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}