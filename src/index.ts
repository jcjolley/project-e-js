import { pOne } from './problem-1';
import { pEleven } from './problem-11';
import { pTwo } from './problem-2';
import { pThree } from './problem-3';
import { pFour } from './problem-4';
import { pFive } from './problem-5';
import { pSix } from './problem-6';
import { pSeven } from './problem-7';
import { pEight } from './problem-8';
import { pNine } from './problem-9';
import { pTen } from './problem-10';
import { triangular } from './triangular';

pOne();
pTwo();
pThree();
pFour();
pFive();
pSix();
pSeven();
pEight();
pNine();
pTen();
pEleven();

console.log(triangular.takeWhile(x => x < 1000));