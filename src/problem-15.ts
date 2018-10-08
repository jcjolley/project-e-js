import { performance } from 'perf_hooks';
import { round } from './round';
import { triangular } from './triangular';
import { range } from 'lodash/fp';

export const doProblem = () => {

    const factorial = (n) => {
        return range(1, n + 1).reduce((prod, x) => prod * x);
    }

    const choose = (n, k) => {
        return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
    }

    const getNumPaths = (n) => {
        return choose(n + n, n)
    }

    const t0 = performance.now();
    const x = getNumPaths(20);
    const t1 = performance.now();

    console.log(`15. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}