import { performance } from 'perf_hooks';
import { round } from './round';
import { range } from "lodash/fp";

export const doProblem = () => {
  const sumOfSquares = (n) => {
    return range(1, n + 1)
      .map(x => x * x)
      .reduce((sum, x) => sum + x);
  }

  const squaresOfSum = (n) => {
    const sum = range(1, n + 1)
      .reduce((sum, x) => sum + x)
    return sum * sum;
  }

  const diffSumOfSquareAndSquareOfSum = (n) => {
    return squaresOfSum(n) - sumOfSquares(n);
  }

  const t0 = performance.now()
  const x = diffSumOfSquareAndSquareOfSum(100)
  const t1 = performance.now()
  console.log(`6. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}