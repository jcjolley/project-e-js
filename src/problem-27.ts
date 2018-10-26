import { performance } from 'perf_hooks';
import { round } from './round';
import { primes, isPrime } from './primes';

export const doProblem = () => {
  const brute = () => {
    // There are no negative primes
    const bs = primes.takeWhile(x => x < 1000); // b must be prime b/c if n === 0, 0 + 0 + b = must be a prime

    let ans = { a: -999, b: -999, n: 0 };
    for (const b of bs) {
      for (let a = 2 - b; a < 1000; a += 2) { // a must be odd (otherwise half of results would be even), and a > 1 - b (n = 1, 1 + a + b >=2 b/c b must be prime)
        let n = 0;
        while (isPrime((n * n) + (a * n) + b)) {
          n++;
        }
        if (n > ans.n) {
          ans = { a, b: b, n }
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