import { performance } from 'perf_hooks';
import { round } from './round';

export const doProblem = () => {

    const t0 = performance.now();
    const x = null;
    const t1 = performance.now();

    console.log(`14. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}