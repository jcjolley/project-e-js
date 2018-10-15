import { performance } from 'perf_hooks';
import { range } from 'lodash/fp';
import { round } from './round';
import { Range } from 'immutable';
export const doProblem = () => {

  const SIZE = 100000
  // http://raganwald.com/2017/04/30/transducers.html
  const sumReducer = (acc, x) => acc + x;
  const isMultipleOf3Or5 = x => [3, 5].some(y => x % y === 0);
  const transducerFilter = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc;
  const sumMultiplesOf3And5 = transducerFilter(isMultipleOf3Or5)(sumReducer);
  const tx0 = performance.now();
  const tx = range(0, SIZE).reduce(sumMultiplesOf3And5);
  const tx1 = performance.now();

  console.log(`1. Tx Result: ${tx}, Time: ${round(tx1 - tx0, 2)}ms`);

  const t0 = performance.now();
  const x = range(0, SIZE)
    .filter(x => [3, 5].some(y => x % y === 0))
    .reduce((acc, x) => acc + x);
  const t1 = performance.now();

  console.log(`1. Result: ${x}, Time: ${round(t1 - t0, 2)}ms`);
  // => 233168

  const r0 = performance.now();
  const r = Range(0, SIZE)
    .filter(isMultipleOf3Or5)
    .reduce(sumReducer);
  const r1 = performance.now();


  console.log(`1. Immutable Result: ${r}, Time: ${round(r1 - r0, 2)}ms`);

  const txr0 = performance.now();
  const txr = Range(0, SIZE).reduce(sumMultiplesOf3And5);
  const txr1 = performance.now();
  console.log(`1. TX Immutable Result ${txr}, Time: ${round(txr1 - txr0, 2)}ms`)
}

const transducerMap = fn => reducer => (acc, val) => reducer(acc, fn(val));