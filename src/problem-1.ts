import { performance } from 'perf_hooks';
import { range } from 'lodash/fp';
import { round } from './round';

export const doProblem = () => {

  // http://raganwald.com/2017/04/30/transducers.html
  const sumReducer = (acc, x) => acc + x;
  const isMultipleOf3Or5 = x => [3, 5].some(y => x % y === 0);
  const transducerFilter = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc;
  const sumMultiplesOf3And5 = transducerFilter(isMultipleOf3Or5)(sumReducer);
  const tx0 = performance.now();
  const tx = range(0, 1000000).reduce(sumMultiplesOf3And5);
  const tx1 = performance.now();

  console.log(`1. Tx Result: ${tx}, Time: ${round(tx1 - tx0, 2)}ms`);

  const t0 = performance.now();
  const x = range(0, 1000000)
    .filter(x => [3, 5].some(y => x % y === 0))
    .reduce((acc, x) => acc + x);
  const t1 = performance.now();

  console.log(`1. Result: ${x}, Time: ${round(t1 - t0, 2)}ms`);
  // => 233168
}




const transducerMap = fn => reducer => (acc, val) => reducer(acc, fn(val));