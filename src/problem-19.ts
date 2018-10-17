import { performance } from 'perf_hooks';
import { round } from './round';
import { last, range, sum, get } from 'lodash/fp';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';

export const doProblem = () => {
    const isLeapYear = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    const isSunday = (days: number) => days % 7 === 0;

    function getFirstDayOfMonth(limit: number) {
        const daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const days: any[] = [1];
        for (let i = 0, year = 1900; year < limit; i++) {
            const offset = daysInMonth[i % 12]! + (i % 12 === 1 && isLeapYear(year) ? 1 : 0)
            days.push(last(days) + offset);
            (i + 1) % 12 === 0 ? year++ : year
        }
        return days;
    }

    const countFirstDaysThatAreSundays = (startYear: number, endYear: number) => {
        const dateArray = getFirstDayOfMonth(endYear)
        return dateArray.slice((startYear - 1900) * 12).filter(isSunday).length;
    }

    const t0 = performance.now();
    const x = countFirstDaysThatAreSundays(1901, 2001);
    const t1 = performance.now();

    console.log(`19. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}