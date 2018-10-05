import { performance } from 'perf_hooks';
export const pTwo = () => {

  function* genFib() {
    let x = 0;
    let y = 1;

    while (true) {
      yield x;
      [x, y] = [y, x + y];
    };
  }

  const getFibLessThanN = (n) => {
    const arr: number[] = [];
    const fibGen = genFib();
    let fib = 0;
    while (fib < n) {
      fib = fibGen.next().value;
      arr.push(fib);
    }
    return arr;
  };

  const t0 = performance.now();
  const x = getFibLessThanN(4000000)
    .filter(x => [2].some(y => x % y === 0))
    .reduce((acc, x) => acc + x);
  const t1 = performance.now();

  console.log(`2. Result: ${x} Time: ${Math.round(t1 - t0)}ms`);
}