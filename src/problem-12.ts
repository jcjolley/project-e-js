import { performance } from 'perf_hooks';
import { triangular } from './triangular';
import { round } from './round';
import { range, memoize } from 'lodash';
import { isPrime } from './primes';

export const doProblem = () => {
    const getNumDivisors = (n: number) => {
        let numDivisors = 1;
        let rootN = Math.ceil(Math.sqrt(n))
        for (let i = rootN; i > 1; i--) {
            if (n % i === 0) {
                numDivisors++;
            }
        }

        return numDivisors * 2;
    }

    const getFirstTriangularNumberWithOver500Divisors = () => {
        for (let i = 0, triangleNumber = triangular.nth(1); true; triangleNumber = triangular.nth(++i)) {
            if (triangleNumber % 2 !== 0) {
                continue;
            }

            if (getNumDivisors(triangleNumber) > 500) {
                return triangleNumber;
            }
        }
    }

    const t0 = performance.now();
    const result = getFirstTriangularNumberWithOver500Divisors();
    const t1 = performance.now();

    console.log(`12. Result: ${result} Time: ${round(t1 - t0, 2)}ms`);
}