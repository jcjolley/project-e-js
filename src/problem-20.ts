import { performance } from 'perf_hooks';
import { round } from './round';
import bigInt, { BigInteger } from 'big-integer';
import { range, toNumber, compose } from 'lodash/fp';
export const doProblem = () => {

    const factorial = (n: number) => range(1, n + 1).reduce((prod: BigInteger, x: number) => prod.multiply(bigInt(x)), bigInt(1))
    const sumDigits = (n: BigInteger) => n.toString().split('').map(toNumber).reduce((sum, x) => sum + x);
    const factorialDigitSum = compose(sumDigits, factorial);

    const t0 = performance.now();
    const x = factorialDigitSum(100);
    const t1 = performance.now();


    console.log(`Num. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}