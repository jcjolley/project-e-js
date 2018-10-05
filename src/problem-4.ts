import { performance } from 'perf_hooks';
import { pipe, toString, split, reverse, isEqual } from 'lodash/fp'

export const pFour = () => {
  const isPalindrome = pipe(
    toString,
    split(''),
    x => [x, reverse(x)],
    ([x, y]) => isEqual(x, y)
  )

  const findLargestPalindrome = (n) => {
    while (!isPalindrome(n)) {
      n--
    }
    return n;
  }

  const findLargestTwoDigitFactors = (n) => {
    let x = 999;
    let y = 999;
    for (let block = 900; block > 0; block -= 100) {
      for (let x = 999; x >= block; x--) {
        for (let y = 999; y >= block; y--) {
          if (are2DigitFactors(x, y, n)) {
            return [x, y];
          }
        }
      }
    }
  }

  const are2DigitFactors = (x, y, n) => {
    return (n % x === 0 && n % y === 0 && x * y === n)
  }

  const findLargestPalindromeWithTwoDigitFactors = (n) => {
    let found;
    while (!found) {
      n = findLargestPalindrome(n);
      found = findLargestTwoDigitFactors(n)
      n--;
    }
    return [found, ++n];
  }

  const t0 = performance.now();
  const x = findLargestPalindromeWithTwoDigitFactors(1000000);
  const t1 = performance.now();

  console.log(`4. Result: ${x} Time: ${Math.round(t1 - t0)}ms`);
}