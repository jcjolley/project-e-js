import { flatten, range, uniq } from 'lodash/fp';
import { performance } from 'perf_hooks';
import { round } from './round';
import BigInteger = require('big-integer');
export const doProblem = () => {

  const results = uniq(
    flatten(
      range(2, 101)
        .map(a => BigInteger(a))
        .map(a => range(2, 101)
          .map(b => BigInteger(b))
          .map(b => a.pow(b))))
      .map(x => x.toString()));

  const t0 = performance.now();
  const x = results.length;
  const t1 = performance.now();

  console.log(`29. Result: ${JSON.stringify(x)} Time: ${round(t1 - t0, 2)}ms`);

}
