import { LazySeq } from './LazySeq';
import { memoize } from 'lodash/fp';
import bigInt from 'big-integer';

function* genFib() {
  let x = 1;
  let y = 1;

  while (true) {
    yield x;
    [x, y] = [y, x + y];
  };
}

export const fibonacci = new LazySeq(genFib);

function* genBigFib() {
  let x = bigInt(1);
  let y = bigInt(1);

  while (true) {
    yield x;
    [x, y] = [y, x.add(y)];
  }
}

export const bigFib = new LazySeq(genBigFib);