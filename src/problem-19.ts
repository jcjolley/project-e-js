import { performance } from 'perf_hooks';
import { round } from './round';
import { last, range, sum } from 'lodash/fp';

export const doProblem = () => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
    const numDaysInYear = (year: number) => isLeapYear(year) ? 366 : 365;

    const t0 = performance.now();
    const x = null
    const t1 = performance.now();

    console.log(`19. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}