import { performance } from 'perf_hooks';
import { LazySeq } from './LazySeq';
import { last } from 'lodash/fp';
import { primes } from './primes';

export const pThree = () => {
  const getLargestPrimeFactor = (n) => {
    const primeFactors = primes.takeWhile(x => x <= Math.sqrt(n));
    return last(primeFactors.filter(x => n % x === 0));
  }

  const t0 = performance.now();
  const x = getLargestPrimeFactor(600851475143);
  const t1 = performance.now();

  console.log(`3. Result: ${x} Time: ${Math.round(t1 - t0)}ms`);
}