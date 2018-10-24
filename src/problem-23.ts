import { performance } from 'perf_hooks';
import { round } from './round';
import { range, sum, negate, partition, flatten, rangeRight, takeWhile } from 'lodash/fp';

export const doProblem = () => {
    const factorize = (n) => range(1, Math.ceil(n / 2) + 1).filter(x => n % x === 0);
    const isAbundant = (n) => sum(factorize(n)) > n
    const getAbundantNumbers = limit => range(12, limit + 1).filter(isAbundant);
    const canSumFromTwoAbundant = (abundant) => (n) => {
        const half = n / 2;
        if (half % 1 === 0 && isAbundant(half)) {
            return true;
        }

        let [lower, upper] = partition(x => x > half, abundant)
        // 3.2x slower: 16.6s
        // return upper.reverse().some(x => takeWhile(y => x + y <= n, lower).some(y => x + y === n))

        // 5s
        for (let i = upper.length - 1; i >= 0; i--) {
            for (let j = 0; j < lower.length; j++) {
                if (upper[i] + lower[j] > n) {
                    break;
                }
                if (upper[i] + lower[j] === n) {
                    return true;
                }
            }
        }

        return false;
    }

    const sumOfNYouCantSumFromTwoAbundant = () => {
        const abundant = getAbundantNumbers(28123);
        return sum(range(1, 28124).filter(negate(canSumFromTwoAbundant(abundant))));
    }


    const t0 = performance.now();
    const x = sumOfNYouCantSumFromTwoAbundant();
    const t1 = performance.now();

    console.log(`Num. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}