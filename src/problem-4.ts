import { performance } from 'perf_hooks';
import { round } from './round';
import { toNumber } from 'lodash/fp';

export const doProblem = () => {
  const findLargestTwoDigitFactors = (n, block) => {
    for (let x = 999; x > block; x--) {
      for (let y = 999; y > block; y--) {
        if (x * y === n) {
          return [x, y];
        }
      }
    }
  }

  function* genPalindromes() {
    for (let n = 999; n > 0; n--) {
      yield toNumber(`${n}${n.toString().split('').reverse().join('')}`);
    }
    return 0;
  }

  const findLargestPalindromeWithTwoDigitFactors = (n) => {
    let value, done, found;
    for (let block = 900; block >= 100 && !found; block -= 100) {
      let palindromes = genPalindromes();
      while (!found && !done) {
        ({ value, done } = palindromes.next());
        found = findLargestTwoDigitFactors(value, block)
      }
    }
    return [found, value];
  }

  const t0 = performance.now();
  const x = findLargestPalindromeWithTwoDigitFactors(1000000);
  const t1 = performance.now();

  console.log(`4. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}