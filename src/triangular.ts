import { LazySeq } from './LazySeq';

function* triangularGenerator () {
    let triangular = 1;
    let i = 2;
        while (true) {
            yield triangular;
            triangular += i++;
        }
}

export const triangular = new LazySeq(triangularGenerator);