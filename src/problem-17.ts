import { performance } from 'perf_hooks';
import { round } from './round';
import { range, pipe } from 'lodash/fp';

export const doProblem = () => {

    const digitToWord = (n) => {
        switch (parseInt(n, 10)) {
            case 0: return '';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen'
            case 18: return 'eighteen'
            case 19: return 'nineteen';
        }

    }
    const tensToWord = (n) => {
        switch (parseInt(n, 10)) {
            case 0: return '';
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety'
        }
    }

    const hundredsToWord = (n) => {
        return parseInt(n, 10) === 0 ? '' : `${digitToWord(n)} hundred`;
    }

    const numberToWord = (n: number) => {
        let word = '';
        const parts = n.toString().split('');
        if (parts.length === 4) {
            word = 'One Thousand'
        }
        if (parts.length === 3) {
            const part = parts.shift();
            word += hundredsToWord(part);
        }
        if (parts.length === 2) {
            const twoDigit = parseInt(parts.join(''), 10);
            if (twoDigit > 0 && twoDigit < 20) {
                word += `${word.length ? ` and ` : ''}${(digitToWord(twoDigit))}`;
            } else if (twoDigit > 0) {
                const tens = parts.shift();
                word += `${word.length ? ` and ` : ''}${tensToWord(tens)}`
                const digit = parts.shift();
                word += `${tens && tens !== '0' && digit !== '0' ? '-' : ''}${digitToWord(digit)}`
            }
        }
        if (parts.length === 1) {
            const digit = parts.shift();
            word += `${digitToWord(digit)}`
        }
        return word;
    }

    const wordToLetterCount = (str) => str.replace(/\s|-/g, '').split('').length;
    const numberToLetterCount = pipe(numberToWord, wordToLetterCount);

    const t0 = performance.now();
    const x = range(1, 1001).map(numberToLetterCount).reduce((sum, n) => sum + n);
    const t1 = performance.now();

    console.log(`17. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}