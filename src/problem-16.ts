import bigInt from 'big-integer';
import { map, pipe, split, sum, toNumber } from 'lodash/fp';
import { performance } from 'perf_hooks';
import { round } from './round';

export const doProblem = () => {

    const sumStrDigits = pipe(
        split(''),
        map(toNumber),
        sum
    )

    const xExpYAsStr = ([x, y]) => bigInt(x).pow(y).toString();
    const sumDigitsOfXExpY = (x, y) => pipe(
        xExpYAsStr,
        sumStrDigits)([x, y]);

    const t0 = performance.now();
    const x = sumDigitsOfXExpY(2, 1000);
    const t1 = performance.now();

    console.log(`Num. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}
