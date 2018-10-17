import { performance } from 'perf_hooks';
import { round } from './round';
import { range, ceil, compose, sum } from 'lodash/fp';

export const doProblem = () => {

    const factorize = (n: number) => range(1, ceil(n / 2) + 1).filter(x => n % x === 0);
    const sumFactorize = compose(sum, factorize);

    const sumAmicablesUpToN = (n: number) => {
        const potentialAmicables = range(1, n).map(sumFactorize);
        const amicables = new Set<number>();
        potentialAmicables.forEach((x, i, arr) => {
            if (x !== i + 1 && arr[x - 1] === i + 1) {
                amicables.add(x);
                amicables.add(i + 1);
            }
        })
        return sum(Array.from(amicables));
    }
    const t0 = performance.now();
    const x = sumAmicablesUpToN(10000);
    const t1 = performance.now();

    console.log(`Num. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}