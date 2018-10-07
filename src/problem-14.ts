import { performance } from 'perf_hooks';
import { round } from './round';
import { memoize } from 'lodash/fp';

export const doProblem = () => {

    const getCollatzLength = memoize((n) => {
        if (n === 1) {
            return n;
        } else if (n % 2 === 0) {
            return 1 + getCollatzLength(n / 2);
        } else {
            return 2 + getCollatzLength((3 * n + 1) / 2);
        }
    });

    const findLongestChain = () => {
        let max = 0;
        let n = 0;
        for (let i = 2; i < 100000; i++) {
            const length = getCollatzLength(i);
            if (length > max) {
                max = length;
                n = i;
            }
        }
        return [n, max];
    }


    const t0 = performance.now();
    const x = findLongestChain();
    const t1 = performance.now();

    console.log(`14. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}