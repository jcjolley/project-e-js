import fs, { lstat } from 'fs';
import { slice, pipe, toNumber, last, nth } from 'lodash/fp';

const fileNameToProblemNumber = pipe(
  x => x.slice(8),
  toNumber
)

const problems: any[] = [];
const x = fs.readdirSync("./dist")
  .filter(x => /problem/.test(x))
  .map(x => x.slice(0, -3))
  .sort((a, b) => fileNameToProblemNumber(a) - fileNameToProblemNumber(b))
  .map(x => `problems.push(require('./${x}'))`)
  .forEach(x => eval(x))

// Run all
// problems.forEach((x: any) => x.doProblem());

// Run latest
// last(problems).doProblem();

// Run specific
nth(0, problems).doProblem();