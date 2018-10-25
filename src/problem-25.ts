import { performance } from 'perf_hooks';
import { round } from './round';
import { bigFib } from './fibonacci';
import { BigInteger } from 'big-integer'

export const doProblem = () => {

    const t0 = performance.now();
    const x = bigFib.findIndex(x => x.toString().length === 1000) + 1 // 1 based;
    const t1 = performance.now();

    console.log(`Num. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}