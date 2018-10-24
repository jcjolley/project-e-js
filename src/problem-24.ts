import { performance } from 'perf_hooks';
import { round } from './round';
import { range } from 'lodash/fp';

export const doProblem = () => {
    const toFactoradic = (n, size): number[] => {
        const res: number[] = [];
        for (let i = 1; n > 0; i++) {
            res.push(n % i)
            n = Math.floor(n / i);
        }
        while (res.length < size) {
            res.push(0);
        }
        return res.reverse();
    }

    const findNthPermutation = (arr: any[], n: number) => {
        n--;
        const factoradic = toFactoradic(n, arr.length);
        const permutation: any[] = [];
        while (arr.length) {
            permutation.push(arr.splice(factoradic.shift()!, 1));
        }
        return permutation.join('');
    }

    const t0 = performance.now();
    const x = findNthPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1000000)
    const t1 = performance.now();

    console.log(`24. Result: ${JSON.stringify(x)} Time: ${round(t1 - t0, 2)}ms`);

}