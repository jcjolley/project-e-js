import { range } from 'lodash';
import { first, tail } from 'lodash/fp';
import { performance } from 'perf_hooks';
import { round } from './round';
export const doProblem = () => {
  const numWays = () => {
    let numways = 0;
    const as = range(0, 201);
    const bs = range(0, 201, 2)
    const cs = range(0, 201, 5);
    const ds = range(0, 201, 10);
    const es = range(0, 201, 20);
    const fs = range(0, 201, 50);
    const gs = range(0, 201, 100);
    const hs = range(0, 201, 200);

    for (const a of as) {
      for (const b of bs) {
        for (const c of cs) {
          for (const d of ds) {
            for (const e of es) {
              for (const f of fs) {
                for (const g of gs) {
                  for (const h of hs) {
                    const total = a + b + c + d + e + f + g + h;
                    if (total === 200) {
                      numways++
                    } else if (total > 200) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return numways;
  }

  // Jonathan's solution is way better. 800x faster
  const countCombinations = (value: number, coins: number[]) => {
    if (value == 0) {
      return 1;
    } else if (value < 0 || !coins.length) {
      return 0;
    } else {
      return countCombinations(value - first(coins)!, coins) + countCombinations(value, tail(coins))
    }
  }

  const t0 = performance.now();
  const x = countCombinations(200, [200, 100, 50, 20, 10, 5, 2, 1]);
  const t1 = performance.now();

  console.log(`31. Result: ${JSON.stringify(x)} Time: ${round(t1 - t0, 2)}ms`);
}
