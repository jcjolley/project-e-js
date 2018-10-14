import { performance } from 'perf_hooks';
import { round } from './round';
import { toNumber, max, sum } from 'lodash/fp';

class Node<T> {
    public value: T;
    public left: any = null;
    public right: any = null;

    constructor(val: T) {
        this.value = val;
    }
    toString() {
        return `${this.value}`;
    }
}


export const doProblem = () => {
    const input = ` 75
                    95 64
                    17 47 82
                    18 35 87 10
                    20 04 82 47 65
                    19 01 23 75 03 34
                    88 02 77 73 07 63 67
                    99 65 04 28 06 16 70 92
                    41 41 26 56 83 40 80 70 33
                    41 48 72 33 47 32 37 16 94 29
                    53 71 44 65 25 43 91 52 97 51 14
                    70 11 33 28 77 73 17 78 39 68 17 57
                    91 71 52 38 17 14 91 43 58 50 27 29 48
                    63 66 04 68 89 53 67 30 73 16 69 87 40 31
                    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

    const findSumOfBestPath = (str) => {
        const numArray = str.split('\n').map(x => x.trim().split(/\s/g).map(toNumber));
        return sumBestPath(numArray)
    }

    const sumBestPath = (numArray: number[][]) => {
        for (let i = numArray.length - 2; i >= 0; i--) {
            numArray[i] = sumRow(numArray[i], numArray[i + 1]);
        }
        return numArray[0][0];
    }

    const sumRow = (row, nextRow) => row.map((x, i) => sumBest(x, nextRow[i], nextRow[i + 1]));
    const sumBest = (x, y, z) => x + max([y, z]);

    const t0 = performance.now();
    const x = findSumOfBestPath(input);
    const t1 = performance.now();

    console.log(`18. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}