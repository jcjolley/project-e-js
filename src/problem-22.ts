import { performance } from 'perf_hooks';
import { round } from './round';
import fs from 'fs';
import path from 'path';
import { compose, sum, map, pipe } from 'lodash/fp';
import { strict } from 'assert';

export const doProblem = () => {

    const multiplyByIndex = (arr: number[]) => arr.map((x, i) => (i + 1) * x);
    const wordToValue = (str: string) => str.split('').map(letterToValue)
    const letterToValue = (str: string) => str.charCodeAt(0) - 64
    const readFile = (filename: string) => fs.readFileSync(path.join(__dirname, '../assets', filename)).toString();
    const getNames = (file: string) => file.split(',').map(x => x.replace(/"/g, '')).sort();

    const sumSortedLetterScores = pipe(
        readFile,
        getNames,
        map(pipe(wordToValue, sum)),
        multiplyByIndex,
        sum
    );

    const t0 = performance.now();
    const x = sumSortedLetterScores('p022_names.txt')
    const t1 = performance.now();

    console.log(`Num. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}