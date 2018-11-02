import { add, map, pipe, range, sum } from 'lodash/fp';
import { performance } from 'perf_hooks';
import { round } from './round';

export const doProblem = () => {
  // n is the n'th square
  const topRight = (n) => Math.pow(2 * n - 1, 2);
  const topLeft = (n) => 4 * n * n - 6 * n + 3
  const bottomRight = (n) => 4 * n * n - 10 * n + 7
  const bottomLeft = (n) => 4 * n * n - 8 * n + 5
  const corners = [topRight, topLeft, bottomRight, bottomLeft];

  const through = (fns, args) => fns.map(fn => fn.call(null, args));
  const sumNthDiagonal = n => sum(through(corners, n));

  const getSquareIndex = width => width / 2 + 0.5

  const sumToNthDiagonal = pipe(
    getSquareIndex,
    add(1), // Range isn't inclusive
    range(2),
    map(sumNthDiagonal),
    sum,
    add(1) // Add the one we skipped by starting at the second value
  )

  const t0 = performance.now();
  const x = sumToNthDiagonal(1001);
  const t1 = performance.now();

  console.log(`28. Result: ${JSON.stringify(x)} Time: ${round(t1 - t0, 2)}ms`);

}
