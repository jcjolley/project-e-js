import { performance } from 'perf_hooks';
import { round } from './round';
import { LazySeq } from './LazySeq';

export const doProblem = () => {

    function* generateCollatz(n: number) {
        let x = n;
        while (x > 1) {
            if (x % 2 === 0) {
                x = x / 2;
                yield x;
            } else {
                x = 3 * x + 1;
                yield x;
            }
        }
        return x;
    }

    const findLongestChain = () => {
        let max = 0;
        let n = 0;
        for (let i = 2; i < 1000000; i++) {
            const collatzSeq = (new LazySeq(generateCollatz, [i])).takeWhile(x => x !== 1);
            const length = collatzSeq.length;
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