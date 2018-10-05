import { LazySeq } from './LazySeq';

let isPrimeHolder;

function* genPrimes() {
  let prime = 2;
  yield prime--;
  while (true) {
    do
      prime += 2
    while (!isPrimeHolder(prime))
    yield prime;
  }
}

export const primes = new LazySeq(genPrimes)

export const isPrime = n => {
  const possiblePrimeFactors = primes.takeWhile(x => x <= Math.sqrt(n));
  return n > 1 && possiblePrimeFactors.every(x => n % x !== 0);
};
isPrimeHolder = isPrime;