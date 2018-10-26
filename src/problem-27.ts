import { performance } from 'perf_hooks';
import { round } from './round';
import { primes, isPrime } from './primes';

export const doProblem = () => {
  const brute = () => {
    // There are no negative primes
    const bs = primes.takeWhile(x => x < 1000);

    let ans = { a: -999, b: -999, n: 0 };
    for (let i = 0; i < bs.length; i++) {
      let min = 1 - bs[i];
      for (let a = min % 2 === 0 ? min + 1 : min; a < 1000; a += 2) {
        let n = 0;
        while (isPrime((n * n) + (a * n) + bs[i])) {
          n++;
        }
        if (n > ans.n) {
          ans = { a, b: bs[i], n }
        }
      }
    }
    return ans;
  }

  const getProd = ({ a, b }) => a * b;

  const t0 = performance.now();
  const x = getProd(brute());
  const t1 = performance.now();

  console.log(`Num. Result: ${JSON.stringify(x)} Time: ${round(t1 - t0, 2)}ms`);

}